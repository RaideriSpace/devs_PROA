// Lista de desenvolvedores
const devs = [
	{
		nome: "Lucas Alves Pinheiro",
		bio: "UX/UI Designer em transição para Front-End. Apaixonado por design, código e inovação.",
		github: "https://github.com/Raideri",
		linkedin: "https://www.linkedin.com/in/lucasalvespinheiro/",
		foto: "https://media.licdn.com/dms/image/v2/D5603AQHjCgDQpQ7l9Q/profile-displayphoto-crop_800_800/B56ZjD1kGpHQAI-/0/1755632255877?e=1764806400&v=beta&t=CNriLivAmCfmDjJ69_m8AHW_6GbDTnAmkltMV2RZq4E",
	},

	{
		nome: "Deeniel Silva Santos",
		bio: "One Piece e vida, Chofer do Pierre nos eventos",
		github: "https://github.com/k4lleb",
		linkedin: "https://www.linkedin.com/in/daniel-ssantoss/",
		foto: "https://www.lingerandlook.com/Names/Dogs/cagney.jpg",
	},

  
	// 👇 EXEMPLO DE DEVE ADICIONAR SEU CARD 👇
	// {
	//   nome: "Seu Nome",
	//   bio: "Uma frase sobre você",
	//   github: "https://github.com/seuusuario",
	//   foto: "link para sua imagem ou avatar do GitHub"
	// }
];

// Função para renderizar os cards
const gallery = document.getElementById("devGallery");

devs.forEach((dev) => {
	const card = document.createElement("div");
	card.classList.add("card");

	card.innerHTML = `
    <img src="${dev.foto}" alt="${dev.nome}">
    <h2>${dev.nome}</h2>
    <p>${dev.bio}</p>
    <a href="${dev.github}" target="_blank">GitHub</a>
    <a href="${dev.linkedin}" target="_blank">LinkedIn</a>
  `;

	gallery.appendChild(card);
});


