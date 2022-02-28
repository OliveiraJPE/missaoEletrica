ticket_medio = ticket_medio.rename(columns={0: 'Ticket_medio'})#mudar o nome da coluna de 0 para Ticket_médio

{faturamento.to_html(formatters={'Valor Final':'R${:,.2f}'.format})}

#Formatar número dentro das chaves: {ticket_medio.to_html(formatters={'Valor Final':'R${:,.2f}.format})}

