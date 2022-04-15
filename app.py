from flask import Flask, render_template, redirect, request, flash
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
#criptografando
app.secret_key = 'codeaugusto'

# criando um dicionário
mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": os.getenv("EMAIL"),
    "MAIL_PASSWORD": os.getenv("SENHA")
}

app.config.update(mail_settings)
#instanciando o Email
mail = Mail(app)

class Contato:
    def __init__(self, nome, email, mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem

#rota de envio
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send', methods=['GET', 'POST'])
def send():
    if request.method == 'POST':
        formContato = Contato(
            request.form["nome"],
            request.form["email"],
            request.form["mensagem"]
        )

        msg = Message(
            subject = f'{formContato.nome} te enviou uma mensagem no portfólio',
            sender = app.config.get("MAIL_USERNAME"),
            # quem vai receber o email
            recipients = ['gutooliveira027@gmail.com',
                            app.config.get("MAIL_USERNAME")
                        ],
            # o que vai aparecer no corpo do email // 3 aspas para deixar o email formatado
            body = f'''

            {formContato.nome} com o email {formContato.email}, te enviou a seguinte mensagem:

            {formContato.mensagem}

            '''
        )   
        #enviar a mensagem através do email
        mail.send(msg)

        # mostrando aviso que o email foi enviado com sucesso
        flash('Mensagem enviada com sucesso!')
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True  )