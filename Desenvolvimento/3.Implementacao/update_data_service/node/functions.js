import { load } from "cheerio";
import { error } from "console";
import fs from "fs";

const baseUrl = "https://investidor10.com.br/";

const period = "yearly";
const anos_anteriores = "4";
const periodo_dividendos = 3650;

function writeContentWithNewLines(content, filePath) {
  const contentWithNewLines = `\n${content}\n`;

  fs.appendFile(filePath, contentWithNewLines, (err) => {
    if (err) {
      console.error("Erro ao escrever no arquivo:", err);
    } else {
      // console.log("Conteúdo escrito com sucesso!");
    }
  });
}

async function requisicao1(ticker_param) {
  try {
    const response = await fetch(`${baseUrl}/acoes/${ticker_param}`);
    const html = await response.text();
    const $ = load(html);
    const node = 30;
    const script = $("script")[node];
    const info = await JSON.parse(
      script.children[0].data.slice(31).replace(/'/g, '"').replace(";", "")
    );
    console.log("INFO", info, info[0]);
    const companyShareholdingDatatable = $("#table-company-base-shareholding");
    const companyId = companyShareholdingDatatable.attr("data-company-id");
    const { ticker, type, id } = info[0];
    const f_response = {
      vticker: ticker,
      vtype: type,
      vid: id,
      vcompanyId: companyId,
    };
    return f_response;
  } catch (e) {
    const erro = {
      error: e.name,
      ticker: ticker_param,
      message: "Erro na Etapa 1",
      errorMessage: e.message,
    };
    writeContentWithNewLines(JSON.stringify(erro), "./logError.txt");
    throw error;
  }
}

async function requisicao2(id) {
  try {
    const response2 = await fetch(`${baseUrl}/api/cotacao/ticker/${id}`);
    if (!response2.ok) {
      throw new Error(
        `Erro HTTP: ${response2.status} - ${response2.statusText}`
      );
    }
    const data = await response2.json();

    return data;
  } catch (e) {
    const content = {
      error: e.name,
      ticker: id,
      message: "Erro na Etapa 2",
      errorMessage: e.message,
    };
    writeContentWithNewLines(JSON.stringify(content), "logError.txt");
    throw new Error(`Erro ${e.name}`);
  }
}

async function requisicao3(companyId) {
  try {
    const response = await fetch(
      `${baseUrl}/api/balancos/balancoresultados/chart/${companyId}/${anos_anteriores}/${period}`
    );
    const json = await response.json();
    return json;
  } catch (e) {
    writeContentWithNewLines(JSON.stringify(e), "logError.txt");
    return {
      error: e.name,
      ticker: companyId,
      errorMessage: e.message,
      message: "Erro na etapa 3.",
    };
  }
}

async function requisicao4(id) {
  try {
    const url = `${baseUrl}api/historico-indicadores/${id}/10`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (e) {
    writeContentWithNewLines(JSON.stringify(e), "logError.txt");
    return {
      error: e.name,
      ticker: id,
      errorMessage: e.message,
      message: "Erro na etapa 4.",
    };
  }
}

async function requisicao5(ticker) {
  try {
    const url5 = `${baseUrl}api/dividendos/chart/${ticker}/${periodo_dividendos}/ano/`;
    const response5 = await fetch(url5);
    const response5_json = await response5.json();
    return response5_json;
  } catch (e) {
    writeContentWithNewLines(JSON.stringify(e), "logError.txt");

    return {
      error: e.name,
      ticker: ticker,
      errorMessage: e.message,
      message: "Erro na etapa 5.",
    };
  }
}

async function requisicao6(ticker) {
  try {
    const url6 = `${baseUrl}api/dividend-yield/chart/${ticker}/${periodo_dividendos}/ano/`;
    const response6 = await fetch(url6);
    const response6_json = await response6.json();
    return response6_json;
  } catch (e) {
    writeContentWithNewLines(JSON.stringify(e), "logError.txt");

    return {
      error: e.name,
      ticker: ticker,
      errorMessage: e.message,
      message: "Erro na etapa 6.",
    };
  }
}
export async function main(ticker_param) {
  try {
    const response1 = await requisicao1(ticker_param);
    const { vid, vcompanyId, vticker } = response1;
    const [response2, response3, response4, response5, response6] =
      await Promise.all([
        requisicao2(vid),
        requisicao3(vcompanyId),
        requisicao4(vid),
        requisicao5(vticker),
        requisicao6(vticker),
      ]);

    const response = {
      response1,
      response2,
      response3,
      response4,
      response5,
      response6,
    };
    return response;
  } catch (err) {
    console.log("Erro: ", err);
  }
}
