import { ImageResponse } from 'next/og';

// Configurações da imagem
export const runtime = 'edge';
export const alt = 'Andrey Pirola - Portfolio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Função principal que gera a imagem
export default async function Image({ params }: { params: { locale: string } }) {
  // Cores do seu projeto
  const yellow = '#FFC107';
  const darkBg = '#0a0a0a'; // Fundo quase preto
  const textWhite = '#F5F5F5';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: darkBg,
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Elemento decorativo de fundo (Glow) */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '800px',
            background: yellow,
            filter: 'blur(150px)',
            opacity: 0.15,
            borderRadius: '50%',
          }}
        />

        {/* Badge "Developer" */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px solid ${yellow}`,
            borderRadius: '50px',
            padding: '10px 24px',
            marginBottom: '40px',
            backgroundColor: 'rgba(255, 193, 7, 0.1)',
          }}
        >
          <span
            style={{
              color: yellow,
              fontSize: 24,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Full Stack Developer
          </span>
        </div>

        {/* Nome Principal */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 100,
              fontWeight: 900,
              color: textWhite,
              margin: 0,
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            Andrey Pirola
          </h1>
          
          <span
             style={{
              fontSize: 32,
              color: 'rgba(245, 245, 245, 0.6)',
              marginTop: 20,
              maxWidth: '800px',
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            Engenharia de Software • Next.js • UI Design
          </span>
        </div>

        {/* Rodapé da imagem (simulando terminal ou link) */}
        <div
            style={{
                position: 'absolute',
                bottom: 50,
                display: 'flex',
                alignItems: 'center',
                gap: 12
            }}
        >
             <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22c55e' }} />
             <span style={{ fontSize: 24, color: textWhite, fontFamily: 'monospace' }}>
                github.com/andreynzz
             </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}