import React from "react";

// Import images (replace with your actual image filenames)
import img1 from "../assets/images/img (1).jpeg";
import img2 from "../assets/images/img (4).jpeg";
import img3 from "../assets/images/img (26).jpeg";
import img4 from "../assets/images/img (31).jpeg";
import img5 from "../assets/images/img (19).jpeg";
import img6 from "../assets/images/img (6).jpeg";
import img7 from "../assets/images/img (52).jpeg";
import img8 from "../assets/images/img (9).jpeg";
import img9 from "../assets/images/img (7).jpeg";
import img10 from "../assets/images/img (30).jpeg";
import img11 from "../assets/images/img (8).jpeg";
import img12 from "../assets/images/img (37).jpeg";
import img13 from "../assets/images/img (59).jpeg";
import img14 from "../assets/images/img (28).jpeg";
import img15 from "../assets/images/img (55).jpeg";
import img16 from "../assets/images/img (5).jpeg";
import img17 from "../assets/images/img (11).jpeg";
import img18 from "../assets/images/img (32).jpeg";
import img19 from "../assets/images/img (46).jpeg";
import img20 from "../assets/images/img (3).jpeg";

const memories = [
	{
		image: img1,
		caption: "A cute and precious flower of my life 🌸",
	},
	{
		image: img2,
		caption: "Swapnsundari 🥰",
	},
	{
		image: img3,
		caption: "Taking care of you all the time is my favorite thing to do 💕",
	},
	{
		image: img4,
		caption: "Alway a hyperactive and playful one 🐞",
	},
	{
		image: img5,
		caption: "Hey there, Mommy. 👋😈🥵🫠🫠",
	},
	{
		image: img6,
		caption: "My sunshine😊",
	},
	{
		image: img7,
		caption: "Feels like I'm looking at our future mini 🙂💜",
	},
	{
		image: img8,
		caption: "want to be with you all the time and make you happy 😘",
	},
	{
		image: img9,
		caption: "Lalpari 💕😁",
	},
	{
		image: img10,
		caption: "A nerd who's always lost in her own thoughts but still manages to be the most adorable person I know 🥰",
	},
	{
		image: img11,
		caption: "Just waiting to see you in this color with me ☺️",
	},
	{
		image: img12,
		caption: "dumbo 👑",
	},
	{
		image: img13,
		caption: "🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂",
	},
	{
		image: img14,
		caption: "Looks more beautiful witout makeup 😍",
	},
	{
		image: img15,
		caption: "My cute and adorable baby 🥰",
	},
	{
		image: img16,
		caption: "Look at that innocent smile... only I know the evil behind it 😈",
	},
	{
		image: img17,
		caption: "A Foolish fool 🌻 who is always ready to do anything for me and loves me unconditionally 🥹",
	},
	{
		image: img18,
		caption: "💕",
	},
	{
		image: img19,
		caption: "Recently we have talked about this 😁",
	},
	{
		image: img20,
		caption: "just stay happy and smiling, you know that I'm always here for you 💕",
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
					border-radius: 16px;
					object-fit: contain;
					max-height: 320px;
					backgroundColor: "#f7f0f5";
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
