import React, { useState } from "react";

// Import images (replace with your actual image filenames)
import img1 from "../assets/images/img (36).jpeg";
import img2 from "../assets/images/img (58).jpeg";
import img3 from "../assets/images/img (39).jpeg";
import img4 from "../assets/images/img (42).jpeg";
import img5 from "../assets/images/img (41).jpeg";
import img6 from "../assets/images/img (57).jpg";
import img7 from "../assets/images/img (63).jpeg";
import img8 from "../assets/images/img (17).jpeg";
import img9 from "../assets/images/img (15).jpeg";
import img10 from "../assets/images/img (44).jpeg";
import img11 from "../assets/images/img (54).jpeg";
import img12 from "../assets/images/img (12).jpeg";
import img13 from "../assets/images/img (10).jpeg";

const photos = [
	{
		image: img1,
		caption: "Always like spicy food 🌶️, just like you 🙂",
	},
	{
		image: img2,
		caption: "Kabhi kabhi lagta hai Annebella ise se inspired hai 👻😁",
	},
	{
		image: img3,
		caption: "Abolutely kitty cat 😸👀👀👀",
	},
	{
		image: img4,
		caption: "Mhari chori bhi chudeil se kam hai ke 🧟‍♀️",
	},
	{
		image: img5,
		caption: "Mani: Ye pagal aurat chod mereko, mar degi kya 💀",
	},
	{
		image: img6,
		caption: "Sochta hun ki wo kitne masoom the, ab to jaise kuch hua nhi ki kaatne ko daudte hain 😪😓",
	},
	{
		image: img7,
		caption: "BTW, Muze Rasgulla bhi pasand hai. You know right? 🙂",
	},
	{
		image: img8,
		caption: "Missing that 35KG cry baby 😭",
	},
	{
		image: img9,
		caption: "Looking at favourite thing ha? 😁",
	},
	{
		image: img10,
		caption: "Mani: Kab picha chodegi ye aurat😂",
	},
	{
		image: img11,
		caption: "Kaliyug 😓",
	},
	{
		image: img12,
		caption: "Kasle ishare aahet he 👀",
	},
	{
		image: img13,
		caption: "Man toh bahot karta hai ye karne ka, lekin kuch kar bhi toh nhi sakte 😑",
	},
];

const Gallery = ({ onBack, onNext }) => {
	// Track which photos are revealed
	const [revealed, setRevealed] = useState(Array(photos.length).fill(false));

	const handleReveal = (idx) => {
		if (!revealed[idx]) {
			const updated = [...revealed];
			updated[idx] = true;
			setRevealed(updated);
		}
	};

	return (
		<div className="gallery-bg">
			<style>{`
				.gallery-bg {
					min-height: 100vh;
					background: linear-gradient(135deg, #e0f7fa 0%, #ffe0f7 100%);
					padding: 1.5rem 0.5rem;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.gallery-card {
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
				.gallery-img {
					width: 100%;
					border-radius: 16px;
					object-fit: contain;
					max-height: 320px;
					transition: filter 0.4s;
					cursor: pointer;
				}
				.gallery-img.blurred {
					filter: blur(18px) brightness(0.95);
				}
				.gallery-overlay {
					margin-top: 0.7rem;
					font-size: 1.1rem;
					color: #a06fa1;
					text-align: center;
					font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
				}
				.gallery-caption {
					margin-top: 0.7rem;
					font-size: 1.1rem;
					color: #6a7ba2;
					text-align: center;
					font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
				}
				.gallery-nav-btns {
					display: flex;
					gap: 1.2rem;
					margin: 2rem auto 0 auto;
				}
				.gallery-back-btn {
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
				.gallery-back-btn:hover {
					opacity: 1;
				}
				.gallery-next-btn {
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
				.gallery-next-btn:hover {
					background: #6fa1ff;
					transform: scale(1.05);
				}
				@media (max-width: 480px) {
					.gallery-card {
						max-width: 98vw;
						padding: 0.7rem 0.3rem 0.7rem 0.3rem;
					}
				}
			`}</style>
			{photos.map((photo, idx) => (
				<div className="gallery-card" key={idx}>
					<img
						src={photo.image}
						alt={photo.caption}
						className={
							revealed[idx] ? "gallery-img" : "gallery-img blurred"
						}
						onClick={() => handleReveal(idx)}
					/>
					{!revealed[idx] ? (
						<div className="gallery-overlay">Tap to reveal 👀</div>
					) : (
						<div className="gallery-caption">{photo.caption}</div>
					)}
				</div>
			))}
			<div className="gallery-nav-btns">
				<button className="gallery-back-btn" onClick={onBack}>Back</button>
				<button className="gallery-next-btn" onClick={onNext}>Next 💕</button>
			</div>
		</div>
	);
};

export default Gallery;
