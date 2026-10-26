const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const express = require('express');

// Server web agar hosting gratis mendeteksi bot tetap aktif
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Bot Discord Aktif!'));
app.listen(PORT, () => console.log(`Server web berjalan di port ${PORT}`));

// Inisialisasi Bot Discord
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent 
    ] 
});

client.once('ready', () => {
    console.log(`Login berhasil sebagai ${client.user.tag}!`);
});

// Perintah untuk menampilkan pesan embed list jasa
client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.content === '!jasa') {
        const embed = new EmbedBuilder()
            .setTitle('Jasa System Roblox ...')
            .setDescription('• Pembuatan System dari 0\n• Remake/penambahan di system\n• Fix bug system\n• Optimasi System')
            .setColor(0x0099ff)
            .setFooter({ text: '© 2026 Ohim Community' });

        await message.channel.send({ embeds: [embed] });
    }
});

// Token diambil secara aman dari pengaturan Environment Variable hosting
client.login(process.env.TOKEN);
