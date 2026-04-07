import json
import uuid
from datetime import datetime

# Imagens geradas
URL_IMG_MESA = "C:/Users/wisem/.gemini/antigravity/brain/86be1a0b-bbe1-4468-8cae-a79ab60bdb7b/mesa_radionica_autoridade_1775362060362.png"
URL_IMG_PROVA = "C:/Users/wisem/.gemini/antigravity/brain/86be1a0b-bbe1-4468-8cae-a79ab60bdb7b/comprovativo_prova_social_1775362077398.png"

# Áudios mockados para o ElevenLabs posteriormente
URL_AUDIO_A = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
URL_AUDIO_B = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"

nodes_flow = [
    { "type": "startFlow" },
    
    # PARTE 1
    { "type": "textMessage", "text": "Olá... Eu estava a rever a fila de mensagens e confesso que a sua energia \"gritou\" aqui. Sinto um ruído de fundo muito forte na sua vida amorosa. Consegui segurar a penúltima vaga de análise de urgência de hoje para o seu caso.", "delay": "15" },
    { "type": "delayNode", "duration": 5, "durationType": "seconds" },
    { "type": "questionMessage", "text": "Para aceder ao portal, preciso cruzar os seus dados antes que a mesa feche. Como se chama? (Apenas o primeiro nome)", "fieldName": "name" },
    { "type": "questionMessage", "text": "Certo. E qual é o nome da pessoa que se afastou de si de forma repentina e cruel?", "fieldName": "custom_target_name" },
    
    # PARTE 2
    { "type": "textMessage", "text": "Entendido. Como prometido, vou agora mesmo avançar com o seu Diagnóstico Vibracional Gratuito. Vou cruzar no Pêndulo de Quartzo o vosso campo magnético. Peço que não me mande mais nenhuma mensagem até eu voltar com o resultado completo. É essencial que mantenha silêncio absoluto para não interferir na análise.", "delay": "10" },
    { "type": "imageMessage", "image": URL_IMG_MESA, "text": "" },
    { "type": "delayNode", "duration": 3, "durationType": "minutes" },

    # PARTE 3
    { "type": "textMessage", "text": "Estou de volta. A sua Leitura Gratuita foi finalizada e processada na luz da mesa. O cruzamento das vossas linhas revelou algo muito específico. Leia o seu diagnóstico com muita atenção:", "delay": "15" },
    { "type": "textMessage", "text": "🔮 **Resultado do Cruzamento Magnético:**\nA análise atesta que tem entregado muito mais luz nesta relação do que aquilo que recebe em troca ultimamente. Carrega uma lealdade incrivelmente pesada. Porém, quando a ruptura e o afastamento aconteceram... a outra pessoa agiu de uma forma fria, quase hostil. Irracional. Como se tivesse virado alguém completamente desconhecido de um dia para o outro. No entanto, as linhas vitais dessa pessoa demonstram um arrependimento camuflado. Pensa em si nos momentos de solidão, mas o orgulho e uma 'parede de confusão' não deixam que dê o braço a torcer.", "delay": "25" },
    { "type": "delayNode", "duration": 8, "durationType": "seconds" },
    { "type": "questionMessage", "text": "Diga-me honestamente: a minha leitura tocou na ferida? Sente que esta frieza repentina e distanciamento orgulhoso foi exatamente o que lhe aconteceu nestes últimos dias?" },

    # PARTE 3.5
    { "type": "textMessage", "text": "Exato. Foi por ter lido essa dor tão profunda no vosso diagnóstico que eu me preocupei logo no primeiro instante. Porque há um 'bastidor' terrível no meio disto tudo. Escute este meu áudio a sós.", "delay": "10" },
    { "type": "audioMessage", "audio": URL_AUDIO_A },

    # PARTE 4
    { "type": "textMessage", "text": "Foi o que eu temi. Mas ouça o que os meus Guias acabaram de ditar. A sua salvação.", "delay": "10" },
    { "type": "imageMessage", "image": URL_IMG_MESA, "text": "" }, # Video placeholder
    { "type": "audioMessage", "audio": URL_AUDIO_B },

    # PARTE 5
    { "type": "textMessage", "text": "O Protocolo de Inversão Magnética para o vosso nome foi libertado com a Autorização de Desconto.", "delay": "5" },
    { "type": "textMessage", "text": "🔥 De €250 por apenas **€47** (Autorização Exclusiva apenas para os próximos 15 minutos).\n\nEnvie os honorários via MBWay para o telemóvel:\n📱 **96X XXX XXX**\n\n(Ou se for IBAN: PT50 XXXX)\n\n👉 Assim que a transferência cair, coloque o comprovativo de foto aqui nesta mesma janela. De seguida abro o ritual e protejo a vossa união desta escuridão.", "delay": "10" },
    { "type": "delayNode", "duration": 5, "durationType": "minutes" },
    { "type": "imageMessage", "image": URL_IMG_PROVA, "text": "" },
    { "type": "delayNode", "duration": 7, "durationType": "minutes" },
    { "type": "textMessage", "text": "O meu templo encerrará as portas em instantes para que eu inicie as sessões fechadas. Reparou no silêncio no vosso relacionamento? Se não travarmos esta energia negra hoje, amanhã será um dia pior e ainda mais frio. Conseguiu proceder com os honorários simbólicos de 47 euros? Se não rececionar o comprovativo em breve, terei de cancelar a sua vaga com o desconto e passá-la para o próximo caso urgente.", "delay": "15" },
]

def generate_funnel():
    tenant = str(uuid.uuid4())
    funnel_id = str(uuid.uuid4())
    now = datetime.utcnow().isoformat() + "Z"

    nodes = []
    edges = []
    
    prev_node_id = None
    y_offset = 0

    for i, n in enumerate(nodes_flow):
        node_id = str(uuid.uuid4())
        
        node = {
            "id": node_id,
            "tenant": tenant,
            "created_at": now,
            "updated_at": now,
            "deletedAt": None,
            "type": n["type"],
            "dragging": False,
            "selected": False,
            "height": 400,
            "width": 320,
            "executionDate": None,
            "position": {
                "id": str(uuid.uuid4()),
                "tenant": None,
                "created_at": now,
                "updated_at": now,
                "deletedAt": None,
                "x": 1000,
                "y": y_offset
            },
            "data": {
                "id": str(uuid.uuid4()),
                "tenant": None,
                "created_at": now,
                "updated_at": now,
                "deletedAt": None,
                "text": n.get("text"),
                "fieldName": n.get("fieldName"),
                "note": None,
                "layout": "TEXT_LIST" if n["type"] != "startFlow" else None,
                "image": n.get("image"),
                "video": None,
                "activeResponseTime": None,
                "validateResponse": True if n["type"] == "questionMessage" else None,
                "duration": n.get("duration"),
                "durationType": n.get("durationType"),
                "audio": n.get("audio"),
                "sticker": None,
                "gif": None,
                "delayTyping": n.get("delay"),
                "code": None,
                "title": None,
                "footer": None,
                "conditionType": None,
                "iaMissionText": None,
                "iaMissionType": None,
                "forwarded": False,
                "totalAccessed": 0,
                "totalFinished": 0,
                "metadata": None,
                "document": {"url": None, "name": None, "type": None},
                "contact": {"name": None, "businessDescription": None, "phone": None},
                "location": {"title": None, "address": None, "latitude": None, "longitude": None},
                "link": {"image": None, "linkUrl": None, "linkSize": None, "title": None, "description": None},
                "integration": {"url": None, "method": None, "headers": None, "body": None, "fields": []},
                "buttons": [],
                "buttonsActions": [],
                "conditions": [],
                "actions": [],
                "random": [],
                "customField": None,
                "moveFlow": None,
                "contactList": [],
                "openingHours": None,
                "templateItemMeta": None
            }
        }
        
        nodes.append(node)
        
        if prev_node_id:
            edge_id = str(uuid.uuid4())
            edge = {
                "id": edge_id,
                "tenant": tenant,
                "created_at": now,
                "updated_at": now,
                "deletedAt": None,
                "source": prev_node_id,
                "sourceHandle": "wait" if nodes_flow[i-1]["type"] in ["delayNode", "questionMessage"] else "continue",
                "target": node_id,
                "targetHandle": "entry" if n["type"] in ["delayNode", "questionMessage", "imageMessage", "audioMessage", "videoMessage"] else None,
                "type": "custom"
            }
            edges.append(edge)
            
        prev_node_id = node_id
        y_offset += 600
        
    funnel = {
        "id": funnel_id,
        "tenant": tenant,
        "created_at": now,
        "updated_at": now,
        "deletedAt": None,
        "name": "FUNIL_BLACK_RESCUE",
        "screenshot": None,
        "active": True,
        "workspaceId": str(uuid.uuid4()),
        "enabledNotifications": False,
        "provider": "Z_API_WHATSAPP",
        "businessId": None,
        "category": None,
        "viewport": {
            "id": str(uuid.uuid4()),
            "tenant": tenant,
            "created_at": now,
            "updated_at": now,
            "deletedAt": None,
            "x": 0,
            "y": 0,
            "zoom": 1
        },
        "shared": None,
        "edges": edges,
        "openingHours": None,
        "flowConfig": None,
        "folder": None,
        "nodes": nodes
    }

    with open("C:/Users/wisem/OneDrive/Desktop/FUNIL_BLACK_RESCUE.json", "w", encoding="utf-8") as f:
        json.dump(funnel, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    generate_funnel()
    print("Funnel backup gerado com sucesso!")
