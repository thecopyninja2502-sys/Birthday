const Welcome = ({ onStart }) => {
	return (
		<div className="welcome-container">
			<style>{`
				.welcome-container {
					min-height: 100vh;
					min-width: 0;
					width: 100vw;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					background: linear-gradient(135deg, #ffe0ec 0%, #d0f1ff 100%);
					animation: fadeIn 1.5s ease;
				}
				.welcome-heading {
					font-size: 3rem;
					color: #ff6fa1;
					margin-bottom: 1rem;
					font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
					text-shadow: 1px 2px 8px #fff6fa;
					animation: float 3s ease-in-out infinite;
				}
				.welcome-subtext {
					font-size: 1.2rem;
					color: #6a7ba2;
					margin-bottom: 2.5rem;
					text-align: center;
					font-family: 'Comic Sans MS', 'Comic Sans';
				}
				.welcome-btn {
					padding: 1rem 2.2rem;
					font-size: 1.1rem;
					background: #ffb6d5;
					color: #fff;
					border: none;
					border-radius: 2rem;
					cursor: pointer;
					box-shadow: 0 2px 8px #ffd6e6;
					transition: transform 0.18s, background 0.18s;
					font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
				}
				.welcome-btn:hover {
					background: #ff6fa1;
					transform: scale(1.06);
				}
				@keyframes fadeIn {
					from { opacity: 0; }
					to { opacity: 1; }
				}
				@keyframes float {
					0%, 100% { transform: translateY(0); }
					50% { transform: translateY(-12px); }
				}
			`}</style>
			<h1 className="welcome-heading"> ❣️❣️ Happy Birthday Mau ❣️❣️😘🥳</h1>
			<div className="welcome-subtext">
				 Wishing you a magical day filled with love, laughter, and sweet surprises!😁 <br/>
				 You’re the bug🐞 in my life—the only one allowed to crash my software🙃 and hardware🙂
			</div>
			<button className="welcome-btn" onClick={onStart}>Start the Surprise 💕</button>
		</div>
	);
};

export default Welcome;
