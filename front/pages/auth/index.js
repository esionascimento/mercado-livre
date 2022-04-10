import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { APIAuthPost } from '../../src/services'

const Auth = () => {
    const { query: { code } } = useRouter()
    const [state, setState] = useState()
    const [secret, setSecret] = useState()
    console.log({secret})

    const fetchAuth = async() => {
        if (code && !state) {
            const data = {
                client_id: "6376278239128125",
                client_secret: secret, 
                code: code,
                redirect_uri: "https://mercadao2022.herokuapp.com",
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

    const handlerOn = (e) => {
        setSecret(e.target.value)
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
                <div>
                    <input type="text" name="secret" onKeyPress={(e) => handlerOn(e)} />
                    <button onClick={() => fetchAuth()}>
                        Enviar
                    </button>
                </div>
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