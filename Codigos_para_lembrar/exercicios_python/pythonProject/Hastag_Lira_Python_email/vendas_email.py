import pandas as pd
import win32com.client as win32

#Importar a base de dados: Arrasta da pasta de origem para cá, na mesma pasta deste arquivo.

#Importar Biblioteca: pandas para ler o excell - import pandas as pd- apelido para colocar no código

#Instalar a biblioteca pandas: Terminal: pip install pandas.

#Instalar pacote para panda ler excell: pip install openpyxl.

#Importar dados do excell
tabela_vendas=pd.read_excel("vendas.xlsx")

#Visualizar a base de dados:pd.set_option(opção, valor)
pd.set_option('display.max_columns', None)
print(tabela_vendas)

# Filtrar colunas pelo pandas:tabela_vendas[['coluna1', 'coluna2']]
#metodo 01: tabela_vendas[['ID Loja', 'Valor Final']]  -  seleciona as colunas
#metodo 01: tabela_vendas.groupby ('ID Loja').sum()  -  agrupa as lojas e soma todas as demais colunas.

#Faturamento por loja.
faturamento = tabela_vendas[['ID Loja', 'Valor Final']].groupby ('ID Loja').sum() #soma
print(faturamento)

#Quantidade de produtos por loja.
qtde=tabela_vendas[['ID Loja', 'Quantidade']].groupby ('ID Loja').sum()
print(qtde)
#Tiket médio por produto em cada loja: faturamento / qtde
ticket_medio = (faturamento['Valor Final']/qtde['Quantidade']).to_frame()#para tranformas a serie de dados resultante da divisão em uma tabela
ticket_medio = ticket_medio.rename(columns={0: 'Ticket_medio'})#mudar o nome da coluna de 0 para Ticket_médio
print(ticket_medio)

#Email: relatório:importar biblioteca para integrar o python e o email. Instalar:  pip install pywin32
#Importar biblioteca dco pywin32 - lá em cima

#copiar código de Stackoverflow - 153
#import win32com.client as win32
#outlook = win32.Dispatch('outlook.application')
#mail = outlook.CreateItem(0)
#mail.to = "To address"
#mail.Subject ='Message subject'
#mail.HTMLBody = '<h2> HTML Message body</h2>'

#mail.Send()

#Mudar os parâmetros do código
outlook = win32.Dispatch('outlook.application')
mail = outlook.CreateItem(0)
mail.to = "missao.filosofica@gmail.com"
mail.Subject ='Relatório de vendas por loja'

#03 três aspas permitem escrever em várias linha e
# f é uma fstring onde me permite passar uma variáccvel dentro das chaves.
# acrescentar   .to_html()   para transformar as tabelas em html.
mail.HTMLBody = f'''

<h2>Prezados,</h2>

<p>Segue o relatório de vendas por cada loja.</p>

<p>Faturamento:</p>
{faturamento.to_html(formatters={'Valor Final':'R${:,.2f}'.format})}

<p>Quantidade Vendida</p>
{qtde.to_html()}

<p>Ticket Médio por cada loja</p>
{ticket_medio.to_html(formatters={'Ticket_medio':'R${:,.2f}'.format})}

<p>Qualquer duvida estou a disposição.</p>
'''
#Formatar número dentro das chaves: {ticket_medio.to_html(formatters={'Valor Final':'R${:,.2f}.format})}
mail.Send()
print("Email Enviado")

