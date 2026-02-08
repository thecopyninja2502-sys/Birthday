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
					font-family: 'Pacifico','Comic Sans MS', 'Comic Sans', cursive, sans-serif;
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
						25th bday jaade 1 quarter complete kelas 🙂 aani life cha hard part pn tyamule khush raha ata. <br />
						Goshtincha load nko gheu aani jevha goshtincha load ghyaycha asel tevha mala sang. Samjun tr nahi ghenar pn pravachan nkki dein 😁😂 <br />
						(samjun pn ghein nay tr parat bhandayla yeshil 😓) <br />
						Surprise message asa kahi nahiye bas je kartey nit kar, chote goals ✨ thev te complete kar mg bg sagla easy vatnar aani thik pn honar. Kadhi kadhi goshtina vel lagto tevda vel de aani mg majja bg. <br/>
						Bas message jast motha nahi karaycha aani love letter pn nahi lihaych moth fakt kalji ghe, exercise 🏋️‍♀️ kar pot vadat chally jaade 🤰 te kmi kar aani healthy khana kha, stress gheu nko aani malahi deu nko. Khush raha fakt. <br />
						Once again, Wishing you the happiest of birthdays, Mau!❣️❣️😘🥰🥳🥳 <br/>
						I love you more than you can imagine.❣️❣️
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
