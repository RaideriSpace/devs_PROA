// Lista de desenvolvedores
const devs = [
	{
		nome: "Lucas Alves Pinheiro",
		bio: "UX/UI Designer em transição para Front-End. Apaixonado por design, código e inovação.",
		github: "https://github.com/Raideri",
		linkedin: "https://www.linkedin.com/in/lucasalvespinheiro/",
		foto: "https://i.pinimg.com/236x/2f/30/e6/2f30e6ae48cc44111fbd7d1c59e5b245.jpg",
	},
	{
		nome: "Lucas de Britto Cruz",
		bio: "Desenvolvendor em início de carreira, ansioso para conhecer mais desse mundo!",
		github: "https://github.com/FireForge-dev",
		linkedin: "https://www.linkedin.com/in/lucas-de-britto-cruz/",
		foto: "https://github.com/FireForge-dev.png",
	},
	{
		nome: "Deeniel Silva Santos",
		bio: "One Piece e vida, Chofer do Pierre nos eventos",
		github: "https://github.com/k4lleb",
		linkedin: "https://www.linkedin.com/in/daniel-ssantoss/",
		foto: "https://www.lingerandlook.com/Names/Dogs/cagney.jpg",
	},
	{
		nome: "Meu nome",
		bio: "Gosto disso e disso",
		github: "https://github.com/",
		linkedin: "https://www.linkedin.com/in/",
		foto: "https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-pm1cary85vjb1.jpg?width=640&crop=smart&auto=webp&s=b08a782c1d86fc39fb239ab272c8ec2d70910cd6",
	},
	{
		nome: "Kathleen Brunna dos Santos",
		bio: "Desenvolvedora Front-end em formação, Técnica em Administração e atuando com gestão de plataforma atualmente.",
		github: "https://github.com/kathleenbrunna",
		linkedin: "https://www.linkedin.com/in/kathleenbrunna/",
		foto: "https://i.pinimg.com/736x/56/0d/8d/560d8dcb636bb844508e4da0c6626c39.jpg",
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


