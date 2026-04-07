const fs = require('fs');
const crypto = require('crypto');

function uuidv4() {
  return crypto.randomUUID();
}

const URL_IMG_MESA = "C:/Users/wisem/.gemini/antigravity/brain/86be1a0b-bbe1-4468-8cae-a79ab60bdb7b/mesa_radionica_autoridade_1775362060362.png";
const URL_IMG_PROVA = "C:/Users/wisem/.gemini/antigravity/brain/86be1a0b-bbe1-4468-8cae-a79ab60bdb7b/comprovativo_prova_social_1775362077398.png";
const URL_AUDIO_A = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; 
const URL_AUDIO_B = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";

const nodes_flow = [
    { type: "startFlow" },
    
    // PARTE 1
    { type: "textMessage", text: "Olá... Eu estava a rever a fila de mensagens e confesso que a sua energia \"gritou\" aqui. Sinto um ruído de fundo muito forte na sua vida amorosa. Consegui segurar a penúltima vaga de análise de urgência de hoje para o seu caso.", delay: "15" },
    { type: "delayNode", duration: 5, durationType: "seconds" },
    { type: "questionMessage", text: "Para aceder ao portal, preciso cruzar os seus dados antes que a mesa feche. Como se chama? (Apenas o primeiro nome)", fieldName: "name" },
    { type: "questionMessage", text: "Certo. E qual é o nome da pessoa que se afastou de si de forma repentina e cruel?", fieldName: "custom_target_name" },
    
    // PARTE 2
    { type: "textMessage", text: "Entendido. Como prometido, vou agora mesmo avançar com o seu Diagnóstico Vibracional Gratuito. Vou cruzar no Pêndulo de Quartzo o vosso campo magnético. Peço que não me mande mais nenhuma mensagem até eu voltar com o resultado completo. É essencial que mantenha silêncio absoluto para não interferir na análise.", delay: "10" },
    { type: "imageMessage", image: URL_IMG_MESA, text: "" },
    { type: "delayNode", duration: 3, durationType: "minutes" },

    // PARTE 3
    { type: "textMessage", text: "Estou de volta. A sua Leitura Gratuita foi finalizada e processada na luz da mesa. O cruzamento das vossas linhas revelou algo muito específico. Leia o seu diagnóstico com muita atenção:", delay: "15" },
    { type: "textMessage", text: "🔮 **Resultado do Cruzamento Magnético:**\nA análise atesta que tem entregado muito mais luz nesta relação do que aquilo que recebe em troca ultimamente. Carrega uma lealdade incrivelmente pesada. Porém, quando a ruptura e o afastamento aconteceram... a outra pessoa agiu de uma forma fria, quase hostil. Irracional. Como se tivesse virado alguém completamente desconhecido de um dia para o outro. No entanto, as linhas vitais dessa pessoa demonstram um arrependimento camuflado. Pensa em si nos momentos de solidão, mas o orgulho e uma 'parede de confusão' não deixam que dê o braço a torcer.", delay: "25" },
    { type: "delayNode", duration: 8, durationType: "seconds" },
    { type: "questionMessage", text: "Diga-me honestamente: a minha leitura tocou na ferida? Sente que esta frieza repentina e distanciamento orgulhoso foi exatamente o que lhe aconteceu nestes últimos dias?" },

    // PARTE 3.5
    { type: "textMessage", text: "Exato. Foi por ter lido essa dor tão profunda no vosso diagnóstico que eu me preocupei logo no primeiro instante. Porque há um 'bastidor' terrível no meio disto tudo. Escute este meu áudio a sós.", delay: "10" },
    { type: "audioMessage", audio: URL_AUDIO_A },

    // PARTE 4
    { type: "textMessage", text: "Foi o que eu temi. Mas ouça o que os meus Guias acabaram de ditar. A sua salvação.", delay: "10" },
    { type: "imageMessage", image: URL_IMG_MESA, text: "" },
    { type: "audioMessage", audio: URL_AUDIO_B },

    // PARTE 5
    { type: "textMessage", text: "O Protocolo de Inversão Magnética para o vosso nome foi libertado com a Autorização de Desconto.", delay: "5" },
    { type: "textMessage", text: "🔥 De €250 por apenas **€47** (Autorização Exclusiva apenas para os próximos 15 minutos).\n\nEnvie os honorários via MBWay para o telemóvel:\n📱 **96X XXX XXX**\n\n(Ou se for IBAN: PT50 XXXX)\n\n👉 Assim que a transferência cair, coloque o comprovativo de foto aqui nesta mesma janela. De seguida abro o ritual e protejo a vossa união desta escuridão.", delay: "10" },
    { type: "delayNode", duration: 5, durationType: "minutes" },
    { type: "imageMessage", image: URL_IMG_PROVA, text: "" },
    { type: "delayNode", duration: 7, durationType: "minutes" },
    { type: "textMessage", text: "O meu templo encerrará as portas em instantes para que eu inicie as sessões fechadas. Reparou no silêncio no vosso relacionamento? Se não travarmos esta energia negra hoje, amanhã será um dia pior e ainda mais frio. Conseguiu proceder com os honorários simbólicos de 47 euros? Se não rececionar o comprovativo em breve, terei de cancelar a sua vaga com o desconto e passá-la para o próximo caso urgente.", delay: "15" },
];

function generateFunnel() {
    const tenant = uuidv4();
    const funnel_id = uuidv4();
    const now = new Date().toISOString();

    const nodes = [];
    const edges = [];
    
    let prev_node_id = null;
    let y_offset = 0;

    nodes_flow.forEach((n, i) => {
        const node_id = uuidv4();
        
        const node = {
            id: node_id,
            tenant: tenant,
            created_at: now,
            updated_at: now,
            deletedAt: null,
            type: n.type,
            dragging: false,
            selected: false,
            height: 400,
            width: 320,
            executionDate: null,
            position: {
                id: uuidv4(),
                tenant: null,
                created_at: now,
                updated_at: now,
                deletedAt: null,
                x: 1000,
                y: y_offset
            },
            data: {
                id: uuidv4(),
                tenant: null,
                created_at: now,
                updated_at: now,
                deletedAt: null,
                text: n.text || null,
                fieldName: n.fieldName || null,
                note: null,
                layout: n.type !== "startFlow" ? "TEXT_LIST" : null,
                image: n.image || null,
                video: null,
                activeResponseTime: null,
                validateResponse: n.type === "questionMessage" ? true : null,
                duration: n.duration || null,
                durationType: n.durationType || null,
                audio: n.audio || null,
                sticker: null,
                gif: null,
                delayTyping: n.delay || null,
                code: null,
                title: null,
                footer: null,
                conditionType: null,
                iaMissionText: null,
                iaMissionType: null,
                forwarded: false,
                totalAccessed: 0,
                totalFinished: 0,
                metadata: null,
                document: {url: null, name: null, type: null},
                contact: {name: null, businessDescription: null, phone: null},
                location: {title: null, address: null, latitude: null, longitude: null},
                link: {image: null, linkUrl: null, linkSize: null, title: null, description: null},
                integration: {url: null, method: null, headers: null, body: null, fields: []},
                buttons: [],
                buttonsActions: [],
                conditions: [],
                actions: [],
                random: [],
                customField: null,
                moveFlow: null,
                contactList: [],
                openingHours: null,
                templateItemMeta: null
            }
        };
        
        nodes.push(node);
        
        if (prev_node_id) {
            const edge_id = uuidv4();
            const sourceWait = ["delayNode", "questionMessage"].includes(nodes_flow[i-1].type);
            const targetEntry = ["delayNode", "questionMessage", "imageMessage", "audioMessage", "videoMessage"].includes(n.type);
            
            const edge = {
                id: edge_id,
                tenant: tenant,
                created_at: now,
                updated_at: now,
                deletedAt: null,
                source: prev_node_id,
                sourceHandle: sourceWait ? "wait" : "continue",
                target: node_id,
                targetHandle: targetEntry ? "entry" : null,
                type: "custom"
            };
            edges.push(edge);
        }
            
        prev_node_id = node_id;
        y_offset += 600;
    });
        
    const funnel = {
        id: funnel_id,
        tenant: tenant,
        created_at: now,
        updated_at: now,
        deletedAt: null,
        name: "FUNIL_BLACK_RESCUE",
        screenshot: null,
        active: true,
        workspaceId: uuidv4(),
        enabledNotifications: false,
        provider: "Z_API_WHATSAPP",
        businessId: null,
        category: null,
        viewport: {
            id: uuidv4(),
            tenant: tenant,
            created_at: now,
            updated_at: now,
            deletedAt: null,
            x: 0,
            y: 0,
            zoom: 1
        },
        shared: null,
        edges: edges,
        openingHours: null,
        flowConfig: null,
        folder: null,
        nodes: nodes
    };

    fs.writeFileSync("C:/Users/wisem/OneDrive/Desktop/FUNIL_BLACK_RESCUE.json", JSON.stringify(funnel, null, 2), "utf-8");
}

generateFunnel();
console.log("Funnel backup gerado com sucesso via NodeJS!");
