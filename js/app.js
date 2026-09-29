const raiz = document.getElementById("trilha");
const resumo = document.getElementById("resumo");
const modal = document.getElementById("modal");
const modalFundo = document.getElementById("modal-fundo");
const modalFechar = document.getElementById("modal-fechar");
const modalFase = document.getElementById("modal-fase");
const modalTitulo = document.getElementById("modal-titulo");
const modalPct = document.getElementById("modal-pct");
const modalCorpo = document.getElementById("modal-corpo");

let ultimoFoco = null;

function topicosDe(modulo) {
  return modulo.grupos.flatMap((grupo) => grupo.topicos);
}

function percentual(lista) {
  if (!lista.length) return 0;
  const feitos = lista.filter((item) => item.feito).length;
  return Math.round((feitos / lista.length) * 100);
}

function etiqueta(valor) {
  if (valor === 100) return "Feito";
  if (valor === 0) return "Pendente";
  return "Em curso";
}

function tag(texto, feito) {
  const el = document.createElement("span");
  el.className = "tag" + (feito ? " feito" : "");
  el.textContent = texto;
  return el;
}

const todos = trilha.flatMap((fase) => fase.modulos.flatMap(topicosDe));
const geral = percentual(todos);
document.documentElement.style.setProperty("--geral", String(geral));
const marca = document.createElement("span");
marca.className = "resumo-pct";
marca.textContent = geral + "%";
resumo.append(marca, " da trilha");

function trilho(ramo) {
  const caixa = document.createElement("div");
  caixa.className = "trilho";
  caixa.append(ramo);
  return caixa;
}

function conector() {
  const linha = document.createElement("div");
  linha.className = "liga";
  linha.setAttribute("aria-hidden", "true");
  return linha;
}

trilha.forEach((fase, indice) => {
  const etapa = document.createElement("li");
  etapa.className = "etapa";
  etapa.style.animationDelay = Math.min(indice * 0.035, 0.42) + "s";

  const textos = document.createElement("div");
  textos.className = "etapa-texto";

  const nomeFase = document.createElement("p");
  nomeFase.className = "fase-nome";
  nomeFase.textContent = fase.fase;

  const titulo = document.createElement("h2");
  titulo.className = "fase-titulo";
  titulo.textContent = fase.titulo;

  const periodo = document.createElement("p");
  periodo.className = "fase-periodo";
  periodo.textContent = fase.periodo;

  textos.append(nomeFase, titulo, periodo);

  const ramo = document.createElement("div");
  ramo.className = "ramo" + (fase.modulos.length === 1 ? " unico" : "");

  fase.modulos.forEach((modulo) => {
    const pct = percentual(topicosDe(modulo));
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "no";
    botao.style.setProperty("--p", String(pct));

    const nome = document.createElement("span");
    nome.className = "no-nome";
    nome.textContent = modulo.nome;

    const valor = document.createElement("span");
    valor.className = "no-pct";
    valor.textContent = pct + "%";

    botao.append(nome, valor, tag(etiqueta(pct), pct === 100));
    botao.addEventListener("click", () => abrir(fase, modulo, botao));

    const encaixe = document.createElement("div");
    encaixe.className = "encaixe";
    const haste = document.createElement("span");
    haste.className = "haste";
    haste.setAttribute("aria-hidden", "true");
    encaixe.append(haste, botao);
    ramo.append(encaixe);
  });

  etapa.append(textos, conector(), trilho(ramo));
  if (indice < trilha.length - 1) etapa.append(conector());
  raiz.append(etapa);
});

function abrir(fase, modulo, origem) {
  ultimoFoco = origem;
  modal.style.setProperty("--p", String(percentual(topicosDe(modulo))));
  modalFase.textContent = fase.fase;
  modalTitulo.textContent = modulo.nome;
  modalPct.textContent = percentual(topicosDe(modulo)) + "%";
  modalCorpo.replaceChildren();

  modulo.grupos.forEach((grupo) => {
    const bloco = document.createElement("section");
    bloco.className = "grupo";

    const titulo = document.createElement("h3");
    titulo.textContent = grupo.nome;
    bloco.append(titulo);

    grupo.topicos.forEach((topico) => {
      const linha = document.createElement("div");
      linha.className = "topico";

      const nome = document.createElement("span");
      nome.textContent = topico.nome;

      linha.append(nome, tag(topico.feito ? "Feito" : "Pendente", topico.feito));
      bloco.append(linha);
    });

    modalCorpo.append(bloco);
  });

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modalFechar.focus();
}

function fechar() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (ultimoFoco) ultimoFoco.focus();
}

modalFundo.addEventListener("click", fechar);
modalFechar.addEventListener("click", fechar);

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && !modal.hidden) fechar();
});
