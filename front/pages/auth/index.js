import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { APIAuthPost } from '../../src/services'

const Auth = () => {
    const { query: { code } } = useRouter()
    const [state, setState] = useState()
    const [secret, setSecret] = useState("");

    const fetchAuth = async(event) => {
        event.preventDefault();
        if (code && !state) {
            const data = {
                client_id: "6376278239128125",
                client_secret: secret, 
                code: code,
                redirect_uri: "https://esionascimento-mercado-livre.vercel.app/auth",
                grant_type: "authorization_code"
            }
            try {
                const result = await APIAuthPost(data)
                setState(result.data.data)
            } catch (err) {
                setState()
                console.log("error: ", err.response)
            }
        }
    }

    return (
        <>
            {state ? (
                <>
                    <div>
                        Access Token: {state.access_token ? state.access_token : ""}
                    </div>
                    <div>
                        Expires In: {state.expires_in ? state.expires_in : ""}
                    </div>
                    <div>
                        Refresh Token: {state.refresh_token ? state.refresh_token : ""}
                    </div>
                    <div>
                        Scope: {state.scope ? state.scope : ""}
                    </div>
                    <div>
                        Token Type: {state.token_type ? state.token_type : ""}
                    </div>
                    <div>
                        User ID: {state.user_id ? state.user_id : ""}
                    </div>
                </>
            ) : code ? (
                <form onSubmit={fetchAuth}>
                    <label>Digite Client Secret:
                        <input 
                        type="text" 
                        value={secret}
                        onChange={(e) => setSecret(e.target.value)}
                        />
                    </label>
                    <input type="submit" />
                </form>
            ) : (
                <div>
                    Aplicação não connectada, code obrigatório
                </div>
            )}
            <div>
                <Link href="/">
                    Voltar
                </Link>
            </div>
        </>
    )
}

export default Auth