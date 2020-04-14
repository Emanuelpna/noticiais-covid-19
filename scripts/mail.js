const payload = (nome, email, descricao) => {
  return { nome, email, descricao };
};

const sendMail = async (payload) => {
  return true;
  
  const response = await fetch(
    'https://emanuelandrade.com.br/services/mail.php',
    {
      method: 'POST',
      body: payload,
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
  const mensagem = form.querySelector('input#mensagem');

  const body = payload(nome.value, email.value, mensagem.value);

  const isSended = await sendMail(body);

  if (isSended) {
    // Alerta de sucesso
    console.log('isSended :', isSended);
  } else {
    // Alerta de erro
    console.error('isSended :', isSended);
  }
});
