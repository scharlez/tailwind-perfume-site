import React from "react";

function App() {
	return (
		<div className="flex flex-col justify-center h-screen bg-green-700">
			<div className="flex justify-center">
				<div className="m-4 p-2 border-2 border-gray-400  rounded-md shadow-md w-1/2 flex flex-col justify-center items-center bg-white">
					<h1 className="text-green-600 text-5xl font-bold">About Us</h1>

					<b>Meet the Developers!</b>
				</div>
			</div>

			<div className="grid grid-cols-1  lg:grid-cols-2 auto-cols-max h-full">
				<div className="bg-white h-full w-full p-6 border-2 ">
					<h2> Steven Dunn </h2>
					<ul class="marker:text-green list-outside list-disc ml-6">
						<li>
							Steven is a U.S. veteran, former system & network administrator
							turned dynamic, detail-oriented full stack web developer driven by
							the passion of building effective coding solutions.
						</li>
						<li>
							Focuses on front-end technologies and creating user-friendly code
							experiences.
						</li>
						<li>
							He is highly collaborative with unique perspective and
							problem-solving abilities.
						</li>
						<li>
							{" "}
							When he's not coding, some of his favorite distractions might
							include: photography, writing, outdoor adventures, calisthenics,
							and of course traveling.
						</li>
					</ul>
				</div>
				<div className="bg-green-700 text-white h-full w-full p-6 ">
					<h2> James Caddick </h2>
					<ul className="marker:text-green list-outside list-disc ml-6">
						<li>
							James is sed consectetur sagittis mauris et suscipit. Morbi id sem
							vel turpis sollicitudin pulvinar eget sit amet magna. In nec erat
							nec neque porta ornare
						</li>
						<li>
							Sed consectetur sagittis mauris et suscipit. Morbi id sem vel
							turpis sollicitudin pulvinar eget sit amet magna. In nec erat nec
							neque porta ornare
						</li>
						<li>
							Sed consectetur sagittis mauris et suscipit. Morbi id sem vel
							turpis sollicitudin pulvinar eget sit amet magna. In nec erat nec
							neque porta ornare
						</li>
						<li>
							{" "}
							Sed consectetur sagittis mauris et suscipit. Morbi id sem vel
							turpis sollicitudin pulvinar eget sit amet magna. In nec erat nec
							neque porta ornare
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
