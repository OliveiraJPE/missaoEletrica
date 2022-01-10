import pandas as pd

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
#Tiket médio por loja.

#Email: relatório.

