import React from "react";

// Import images (replace with your actual image filenames)
import img1 from "../assets/images/img (1).jpeg";
import img2 from "../assets/images/img (2).jpeg";
import img3 from "../assets/images/img (3).jpeg";

const memories = [
	{
		image: img1,
		caption: "A magical day at the park!",
	},
	{
		image: img2,
		caption: "Laughing together at the cafe.",
	},
	{
		image: img3,
		caption: "Our silly selfie adventure!",
	},
];

const Memories = ({ onNext }) => {
	return (
		<div className="memories-bg">
			<style>{`
				.memories-bg {
					min-height: 100vh;
					background: linear-gradient(135deg, #e0f7fa 0%, #ffe0f7 100%);
					padding: 1.5rem 0.5rem;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.memory-card {
					background: #fff6fa;
					border-radius: 1.2rem;
					box-shadow: 0 2px 12px #f8e1f0;
					margin-bottom: 1.5rem;
					width: 100%;
					max-width: 370px;
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 1rem 1rem 0.8rem 1rem;
				}
				.memory-img {
					width: 100%;
					border-radius: 1rem;
					object-fit: cover;
					max-height: 260px;
				}
				.memory-caption {
					margin-top: 0.7rem;
					font-size: 1.05rem;
					color: #a06fa1;
					text-align: center;
					font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
				}
				.memories-next-btn {
					margin: 1.5rem auto 0 auto;
					padding: 0.9rem 2.2rem;
					font-size: 1.1rem;
					background: #b6e0ff;
					color: #fff;
					border: none;
					border-radius: 2rem;
					cursor: pointer;
					box-shadow: 0 2px 8px #d6eaff;
					transition: background 0.18s, transform 0.18s;
					font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
				}
				.memories-next-btn:hover {
					background: #6fa1ff;
					transform: scale(1.05);
				}
				@media (max-width: 480px) {
					.memory-card {
						max-width: 98vw;
						padding: 0.7rem 0.3rem 0.7rem 0.3rem;
					}
				}
			`}</style>
			{memories.map((mem, idx) => (
				<div className="memory-card" key={idx}>
					<img src={mem.image} alt={mem.caption} className="memory-img" />
					<div className="memory-caption">{mem.caption}</div>
				</div>
			))}
			<button className="memories-next-btn" onClick={onNext}>Next 💕</button>
		</div>
	);
};

export default Memories;
