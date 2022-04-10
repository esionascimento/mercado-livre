
export default function Home() {
    
    return (
        <>
            <div>Integração com Mercado Livre</div>
            <a target="_blank" href="https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=6376278239128125&redirect_uri=https://esionascimento-mercado-livre.vercel.app/auth" rel="noopener noreferrer">
                <button>
                    Autenticar
                </button>
            </a>
        </>
    )
}
