// Configurações iniciais
const canvas = document.getElementById('logoCanvas');
const ctx = canvas.getContext('2d');
const elementos = {
    textoLogo: document.getElementById('textoLogo'),
    corLogo: document.getElementById('corLogo'),
    fonteLogo: document.getElementById('fonteLogo'),
    estiloLogo: document.getElementById('estiloLogo'),
    btnDownload: document.getElementById('btnDownload'),
    btnPremium: document.getElementById('btnPremium')
};

// Função para desenhar o logo
function desenharLogo() {
    const texto = elementos.textoLogo.value || 'MINHA MARCA';
    const cor = elementos.corLogo.value;
    const fonte = elementos.fonteLogo.value;
    const estilo = elementos.estiloLogo.value;
    
    // Limpar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Aplicar estilo base
    let fontSize = 40;
    let fontStyle = 'bold';
    
    switch(estilo) {
        case 'moderno':
            fontSize = 36;
            fontStyle = '600';
            break;
        case 'elegante':
            fontSize = 32;
            fontStyle = '300';
            break;
    }
    
    // Configurar fonte
    ctx.font = `${fontStyle} ${fontSize}px ${fonte}`;
    ctx.fillStyle = cor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Desenhar texto
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    
    // Adicionar efeitos baseados no estilo
    switch(estilo) {
        case 'moderno':
            ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            break;
        case 'elegante':
            // Texto com contorno sutil
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 0.5;
            ctx.strokeText(texto, x, y);
            break;
    }
    
    ctx.fillText(texto, x, y);
    
    // Resetar sombras
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
}

// Função para baixar o logo
function baixarLogo() {
    try {
        const link = document.createElement('a');
        link.download = `logo-${elementos.textoLogo.value || 'marca'}.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Feedback visual
        elementos.btnDownload.textContent = '✅ Baixado!';
        setTimeout(() => {
            elementos.btnDownload.textContent = '📥 Download Grátis';
        }, 2000);
        
    } catch (error) {
        alert('Erro ao baixar o logo. Tente novamente.');
        console.error('Erro no download:', error);
    }
}

// Função para serviço premium
function solicitarPremium() {
    const texto = elementos.textoLogo.value || 'MINHA MARCA';
    const cor = elementos.corLogo.value;
    const fonte = elementos.fonteLogo.value;
    const estilo = elementos.estiloLogo.value;
    
    const mensagem = `Olá! Gostaria de pedir o serviço Premium de logo!\n\n` +
                    `📋 Detalhes:\n` +
                    `• Texto: ${texto}\n` +
                    `• Cor: ${cor}\n` +
                    `• Fonte: ${fonte}\n` +
                    `• Estilo: ${estilo}\n\n` +
                    `💰 Serviço: Logo Premium - R$ 80`;
    
    abrirWhatsApp(mensagem);
}

// Função para abrir WhatsApp
function abrirWhatsApp(mensagem) {
    const numeroWhatsApp = "5511999999999"; // SUBSTITUA pelo seu número
    const textoCodificado = encodeURIComponent(mensagem);
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;
    window.open(url, '_blank');
}

// Event Listeners
elementos.textoLogo.addEventListener('input', desenharLogo);
elementos.corLogo.addEventListener('input', desenharLogo);
elementos.fonteLogo.addEventListener('change', desenharLogo);
elementos.estiloLogo.addEventListener('change', desenharLogo);
elementos.btnDownload.addEventListener('click', baixarLogo);
elementos.btnPremium.addEventListener('click', solicitarPremium);

// Inicializar
window.addEventListener('load', function() {
    desenharLogo();
    
    // Animar entrada
    document.querySelectorAll('section').forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Efeito de digitação no header
function efeitoDigitacao() {
    const subtitulo = document.querySelector('header p');
    const textoOriginal = subtitulo.textContent;
    subtitulo.textContent = '';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < textoOriginal.length) {
            subtitulo.textContent += textoOriginal.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 50);
}

// Iniciar efeito quando a página carregar
window.addEventListener('load', efeitoDigitacao);
