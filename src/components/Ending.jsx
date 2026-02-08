import React from "react";

const Ending = ({ onBack }) => {
	return (
		<div className="ending-bg">
			<style>{`
				.ending-bg {
					min-height: 100vh;
					width: 100vw;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					background: linear-gradient(135deg, #e0f7fa 0%, #ffe0f7 100%);
				}
				.ending-message {
					font-size: 1.4rem;
					color: #a06fa1;
					margin-bottom: 2.2rem;
					text-align: center;
					font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
				}
				.ending-back-btn {
					padding: 0.5rem 1.2rem;
					font-size: 0.95rem;
					background: #e0e7ff;
					color: #6a7ba2;
					border: none;
					border-radius: 1.2rem;
					cursor: pointer;
					opacity: 0.8;
					font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
					transition: opacity 0.18s;
				}
				.ending-back-btn:hover {
					opacity: 1;
				}
			`}</style>
			<div className="ending-message">
				Thank you for sharing these special moments with me.<br />
				You are loved more than words can say. 💖<br />
                I hope this made you smile, even a little. <br/>
				Happy Birthday, Mau!
			</div>
			<button className="ending-back-btn" onClick={onBack}>Back</button>
		</div>
	);
};

export default Ending;
