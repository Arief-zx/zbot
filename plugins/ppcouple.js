/*import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  let res = await fetch(global.API('LeysCoder', '/api/ppcouple', {}, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  await conn.sendFile(m.chat, json.result.male, '', 'Male', m)
  await conn.sendFile(m.chat, json.result.female, '', 'Female', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['internet', 'limitmenu']
handler.command = /^(pp(cp|couple))$/i
handler.limit = true

export default handler*/
