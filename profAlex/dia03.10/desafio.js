

app.post("/usuarios", async(req,res) =>{
    try{
        const {body} = req
         const [results] = await pool.query(
        'INSERT INTO usuario (nome_usuario, idade_usuario, email_usuario, senha_usuario VALUES(?, ?, ?, ?)',
       [body.nome, body.idade, body.email, body.senha]
    ); 
    const [usuarioCriado] = await pool.query(
        "SELECT * FROM usuario WHERE id_usuario=?",
        results.insertId
    )

    res.status(201).json(results)
    
}catch(error){
        console.log(error)
     }
} )