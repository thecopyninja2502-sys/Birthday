import React, { useState } from "react";

const Surprise = ({ onBack, onNext }) => {
	const [opened, setOpened] = useState(false);

	return (
		<div className="surprise-bg">
			<style>{`
				.surprise-bg {
					min-height: 100vh;
					width: 100vw;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					background: linear-gradient(135deg, #ffe0ec 0%, #e0f7fa 100%);
				}
				.surprise-message {
					font-size: 1.5rem;
					color: #a06fa1;
					margin-bottom: 2.2rem;
					text-align: center;
					font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
				}
				.surprise-btn {
					padding: 1rem 2.2rem;
					font-size: 1.1rem;
					background: #ffb6d5;
					color: #fff;
					border: none;
					border-radius: 2rem;
					cursor: pointer;
					box-shadow: 0 2px 8px #ffd6e6;
					transition: background 0.18s, transform 0.18s;
					font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
				}
				.surprise-btn:hover {
					background: #ff6fa1;
					transform: scale(1.06);
				}
				.nav-btns {
					display: flex;
					gap: 1.2rem;
					margin-top: 2.2rem;
				}
				.back-btn {
					padding: 0.5rem 1.2rem;
					font-size: 0.95rem;
					background: #e0e7ff;
					color: #6a7ba2;
					border: none;
					border-radius: 1.2rem;
					cursor: pointer;
					opacity: 0.8;
					font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
				}
				.back-btn:hover {
					opacity: 1;
				}
				.next-btn {
					padding: 0.8rem 2rem;
					font-size: 1.08rem;
					background: #b6e0ff;
					color: #fff;
					border: none;
					border-radius: 2rem;
					cursor: pointer;
					font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
					box-shadow: 0 2px 8px #d6eaff;
					transition: background 0.18s, transform 0.18s;
				}
				.next-btn:hover {
					background: #6fa1ff;
					transform: scale(1.05);
				}
			`}</style>
			{!opened ? (
				<>
					<div className="surprise-message">I have something for you 💝</div>
					<button className="surprise-btn" onClick={() => setOpened(true)}>
						Tap to open 🎁
					</button>
				</>
			) : (
				<>
					<div className="surprise-message">
						You are the sweetest gift in my life! 🎂💖<br />
						Thank you for making every day magical. I hope this birthday brings you as much joy as you bring to everyone around you!
					</div>
					<div className="nav-btns">
						<button className="back-btn" onClick={onBack}>Back</button>
						<button className="next-btn" onClick={onNext}>Next 💕</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Surprise;
