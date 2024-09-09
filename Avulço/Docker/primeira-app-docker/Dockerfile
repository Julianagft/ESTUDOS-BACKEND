# Um dockerfile sempre deve começar importando a imagem de base.
# Usamos a palavra-chave 'FROM' para isso.
# Em nosso exemplo, queremos importar a imagem do python.
# Assim, escrevemos 'python' para o nome da imagem e 'latest' para  a versão.

FROM python:latest

COPY main.py /

# Precisamos definir o comando para lançar quando rodarmos a imagem.
# Usamos a palavra-chave 'CMD' para isso.
# O comando a seguir executará "python ./main.py".

CMD [ "python", "./main.py" ]


# $ docker build -t python-test . (Comando para criar a imagem no cmd);
# A opção '-t' permite que você defina o nome de sua imagem. Em nosso caso, escolhemos 'python-test', mas você pode usar o nome que quiser.

# $ docker run nome-da-imagem (Comando para rodar a imagem no cmd);
