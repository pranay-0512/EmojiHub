import React, { useEffect, useState } from "react";
import Card from "../../components/cards";
import './style.css'
const Dashboard = () => {
  const [emoji, setEmoji] = useState([]);
  useEffect(() => {
    const fetchEmoji = async () => {
      try {
        const response = await fetch("https://emojihub.yurace.pro/api/all");
        console.log(response);
        if (!response.ok) {
          throw new Error("Error fetching!");
        }
        const data = await response.json();
        setEmoji(data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchEmoji();
  }, []);

  return (
    <div className="dashboard-container">
      {emoji.map((emojiItem) => {
        const { unicode, htmlCode, name, group, category } = emojiItem;
        const combinedHtml = htmlCode.join("");
        return (
          <div key={unicode} className="emoji-card">
            <Card
              dangerouslySetInnerHTML={{ __html: combinedHtml }}
              value={name}
              group={group}
              category={category}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
