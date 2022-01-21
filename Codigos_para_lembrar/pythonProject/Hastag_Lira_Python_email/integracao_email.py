#Email: relatório:importar biblioteca para integrar o python e o email. Instalar:  pip install pywin32
#Importar biblioteca dco pywin32
#copiar código de Stackoverflow - 153
import win32com.client as win32
outlook = win32.Dispatch('outlook.application')
mail = outlook.CreateItem(0)
mail.to = "To address"
mail.Subject ='Message subject'
mail.HTMLBody = '<h2> HTML Message body</h2>'

mail.Send()