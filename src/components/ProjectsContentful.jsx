import { useState, useEffect } from "react";

const query = `
{
    projectCollection {
    items {
      title
      description
      year
      projectImage{
        url
      }
    }
  }
}
`;

function ProjectsContentful() {
	const [page, setPage] = useState(null);
	// const [hiddenImage, setHiddenImage] = useState(false);

	const spaceId = process.env.REACT_APP_CONTENFUL_SPACE_ID;
	const accessKey = process.env.REACT_APP_CONTENFUL_ACCESS_KEY;

	useEffect(() => {
		window
			.fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessKey}`,
				},
				body: JSON.stringify({ query }),
			})
			.then((response) => response.json())
			.then(({ data, errors }) => {
				if (errors) {
					console.error(errors);
				}

				setPage(data.projectCollection.items);
				console.log(data.projectCollection.items);
			});
	}, [spaceId, accessKey]);

	if (!page) {
		return "Loading...";
	}

	return (
		<div className="cv-container">
			{page.map((entry) => (
				<div
					className="cv-text"
					key={entry.title}
					// onMouseEnter={() => setHiddenImage(true)}
					// onMouseLeave={() => setHiddenImage(false)}
					// onMouseOver={() => setHiddenImage(true)}
				>
					{/* <img
						className="movie-img"
						alt="Still from movie"
						src={entry.projectImage.url}
					/> */}
					{/* {entry.projectImage.url && (
						<img
							className="movie-img"
							alt="Still from movie"
							src={entry.projectImage.url}
						/>
					)} */}

					<p className="project-title">{entry.title}</p>
					{entry.description && (
						<p className="project-sub">{entry.description}</p>
					)}
					<p className="project-sub">{entry.year}</p>
				</div>
			))}
		</div>
	);
}

export default ProjectsContentful;
