const payload = (nome, email, descricao) => {
  return { nome, email, descricao };
};

const sendMail = async (payload) => {
  const response = await fetch(
    'https://emanuelandrade.com.br/services/mail.php',
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { ContentType: 'application/json' },
    }
  );

  if (response.status === 204) {
    return true;
  } else {
    return false;
  }
};

const form = document.querySelector('#sendMail');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = form.querySelector('input#nome');
  const email = form.querySelector('input#email');
  const mensagem = form.querySelector('textarea#mensagem');

  const body = payload(nome.value, email.value, mensagem.value);

  const isSended = await sendMail(body);

  if (isSended) {
    // Alerta de sucesso
    alert('Email enviado com sucesso!');
  } else {
    // Alerta de erro
    alert('Não foi possível enviar o email, tente novamente mais tarde.');
  }
});
