export function Login() {
    
    
    
    
    return (
        <>
            <h1>Faça seu Login</h1>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" required/>
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="text" name="senha" required />
            </div>
            <div>
                <button>Entrar</button>
            </div>
        </>
    )
}
