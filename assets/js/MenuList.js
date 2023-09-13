endpoint = `https://docs-api.jrtxtracy.repl.co`
message_list = [{
    icon: 'fa-solid fa-star-exclamation',
    title: 'Trang web bắt đầu hoạt động',
    timing: '1655701877368'
}];

item_list = [
    {
        event: 'HOT',
        name: 'APIKEY',
        icon: 'fas fa-terminal',
        item: [{
                "url": endpoint + '/apikey?type=register&name=${đặt tên gì cũng được}',
                "name": "Create APIKEY"
            },
            {
                "url": endpoint + '/apikey?type=checker&apikey=JRTfree_4097397695',
                "name": "Check APIKEY"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Download ALL IN ONE',
        icon: 'fas fa-download',
        item: [{
                "url": 'https://nguyenmanh.name.vn/videodl',
                "name": "Download Video"
            },
            {
                "url": 'https://nguyenmanh.name.vn/audiodl',
                "name": "Download Audio"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'UPTIMEROBOT',
        icon: 'fas fa-user-secret',
        item: [{
                "url": 'https://uptimerobot.catteam123.repl.co/',
                "name": "Uptime"
            },
            {
                "url": 'https://uptimebot.catteam123.repl.co/',
                "name": "Uptimev2"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Facebook',
        icon: 'fa-brands fa-facebook',
        item: [{
            "url": endpoint + '/facebook/finduid?url=https://www.facebook.com/PhamVanDien.User/',
            "name": "Find UID"
        },
        {
            "url": endpoint + '/facebook/info?uid=100033478361032',
            "name": "Get Info"
        },
        {
            "url": endpoint + '/facebook/media?url=https://fb.watch/n0uyx7R8iP/',
            "name": "Tải video từ Facebook V1"
        },
        {
            "url": endpoint + '/facebook/video?url=https://www.facebook.com/MixiGaming/videos/266538209588714',
            "name": "Tải video từ Facebook V2"
        }       
        ]
    },
    {
        event: 'HOT',
        name: 'TikTok',
        icon: 'fa-brands fa-tiktok',
        item: [{
                "url": endpoint + "/tiktok?url=https://vt.tiktok.com/ZSLwWSQ2u/",
                "name": "TikTok Downloader"
            },
            {
                "url": endpoint + "/tiktok/download?link=https://vt.tiktok.com/ZSLwWSQ2u/",
                "name": "TikTok Downloader 2"
            },   
            {
                "url": endpoint + "/tiktok?search=mixigaming",
                "name": "TikTok Search"
            },
            {
                "url": endpoint + "/tiktok?username=mixigaming",
                "name": "TikTok Info User"
            },
            {
                "url": endpoint + "/tiktok/trending",
                "name": "TikTok Trending"
            }   
        ]
    },
    {
        event: 'HOT',
        name: 'Tạo avatar anime',
        icon: 'fa-solid fa-user-tie',
        item: [{
                "url": endpoint + "/taoanhdep/list",
                "name": "Danh sách nhân vật"
            },
            {
                "url": endpoint + "/taoanhdep/search?type=name&name=luffy",
                "name": "Tìm kiếm nhân vật theo tên"
            },
            {
                "url": endpoint + "/taoanhdep/search?type=id&id=135",
                "name": "Tìm kiếm nhân vật theo ID"
            },
            {
                "url": endpoint + "/taoanhdep/search?type=movie&movie=One Piece",
                "name": "Tìm kiếm nhân vật theo tên phim"
            },
            {
                "url": endpoint + "/taoanhdep/data",
                "name": "Dữ liệu tạo ảnh anime"
            },   
            {
                "url": endpoint + "/taoanhdep/avatarwibu?id=1&chu_nen=Nguyễn Hải Đăng&chu_ky=JRT",
                "name": "Tạo avatar"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Code',
        icon: 'fa-solid fa-code',
        item: [{
                "url": 'https://deobfuscate.relative.im/',
                "name": "Deobfuscate"
            },
            {
                "url": 'https://obfuscator.io/',
                "name": "Obfuscate"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Mail 10 minutes',
        icon: 'fas fa-envelope-open-text',
        item: [{
                "url": "https://10minutemail.net/address.api.php?new=1",
                "name": "Create Mail"
            },
            {
                "url": "https://10minutemail.net/address.api.php?more=1",
                "name": "More Mail"
            },
            {
                "url": "https://10minutemail.net/address.api.php",
                "name": "Get Mail"
            },
            {
                "url": "https://10minutemail.net/address.api.php?check=1",
                "name": "Check Mail"
            }   
        ]
    },
    {
        event: 'HOT',
        name: 'Comics',
        icon: 'fas fa-book',
        item: [{
                "url": endpoint + '/hentaiz/list',
                "name": "List Hentaiz"
            },
            {
                "url": endpoint + '/hentaiz/read?id=26&chapter=2',
                "name": "Read Hentaiz"
            },
            {
                "url": endpoint + '/hentaiz/contribute?link=https://hentaizz.vip/dung-hoc-nua-cham-vao-em-di-ma/&name=JRT',
                "name": "Contribute Hentaiz"
            }, 
            {
                "url": endpoint + '/hentaiz/info?id=26',
                "name": "Find ID"
            },
            {
                "url": endpoint + '/hentaiz/data',
                "name": "Dữ liệu truyện"
            },
            {
                "url": endpoint + '/hentaiz/data2',
                "name": "Dữ liệu đóng góp"
            }   
        ]
    },
    {
        event: 'HOT',
        name: 'Canvas',
        icon: 'fa-solid fa-diagram-lean-canvas',
        item: [{
                "url": endpoint + "/blink?id=100033478361032,100033478361032&delay=500",
                "name": "Blink"
            },
            {
                "url": endpoint + "/fbcover/v1?name=Nguyễn Hải Đăng&color=cyan&address=VietNam&email=dangz123456789z@gmail.com&subname=JRT&sdt=0396049***&uid=100033478361032",
                "name": "Facebook Cover v1"
            },
            {
                "url": endpoint + "/fbcover/v2?name=Nguyễn Hải Đăng&color=cyan&subname=JRT&id=100033478361032",
                "name": "Facebook Cover v2"
            },
            {
                "url": endpoint + "/fbcover/v3?name=Nguyễn Hải Đăng&birthday=26/02&love=Nguyễn Hồng Phấn&location=VietNam&hometown=VietNam&follow=37548912&gender=Nam&uid=100033478361032",
                "name": "Facebook Cover v3"
            },
            {
                "url": endpoint + "/cccd/?text1=Hải%20Đăng%20-%20JRT&text2=26&text3=02&text4=2003&urlimg=https://i.imgur.com/hvjGX8B.jpg",
                "name": "Fake CCCD"
            },   
            {
                "url": endpoint + "/tiki?text=Nguyễn Hải Đăng",
                "name": "Đi cùng Tiki"
            },
            {
                "url": endpoint + "/thuphap?id=1&sodong=1&dong_1=Nguyễn Hải Đăng",
                "name": "Chữ Thư Pháp"
            },
            {
                "url": endpoint + "/giangsinh?text=Nguyễn Hải Đăng",
                "name": "Giáng Sinh"
            },
            {
                "url": endpoint + "/shopmaihuong?text1=Nguyễn Hải Đăng&text2=0396049***",
                "name": "Shop Mike Hường"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'SoundCloud',
        icon: 'fa-brands fa-soundcloud',
        item: [{
                "url": endpoint + '/soundcloud?search=son tung',
                "name": "SoundCloud Search"
            },
            {
                "url": endpoint + '/soundcloud?url=https://soundcloud.com/sontungmtp-music/ch-ng-ta-c-a-hi-n-t-i',
                "name": "SoundCloud Downloader"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Confession',
        icon: 'fas fa-users',
        item: [{
                "url": endpoint + "/cfsdata",
                "name": "Find id"
            },
            {
                "url": endpoint + "/cfs?message=Tất cả API là của JRT PROJECT & D-Jukie&senderID=100033478361032&name=𝑁𝑔𝑢𝑦𝑒𝑛 𝐻𝑎𝑖 𝐷𝑎𝑛𝑔 𓅂",
                "name": "Send Message"
            },
            {
                "url": endpoint + "/react?index=100000000017",
                "name": "React Post"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Youtube',
        icon: 'fa-brands fa-youtube',
        item: [{
                "url": endpoint + '/youtube?search=Sơn Tùng',
                "name": "Youtube Search"
            },
            {
                "url": endpoint + '/youtube?GetVideoId=https://www.youtube.com/watch?v=Jk38OqdAQxc',
                "name": "Get Video Id"
            },
            {
                "url": endpoint + '/youtube?GetVideoDetails=Jk38OqdAQxc',
                "name": "Get Video Details"
            },
            {
                "url": endpoint + '/youtube?downloadVideo=Jk38OqdAQxc',
                "name": "Youtube Downloader"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Short Url',
        icon: 'fa-solid fa-curling-stone',
        item: [{
            "url": endpoint + '/slink?url=https://www.youtube.com/watch?v=Jk38OqdAQxc',
            "name": "Short Url"
        }]
    },
    {
        event: 'HOT',
        name: 'Banking',
        icon: 'fas fa-university',
        item: [{
                "url": endpoint + "/bank/check?ID=100033478361032",
                "name": "Check Bank ID"
            },
            {
                "url": endpoint + "/bank/register?senderID=100033478361032&name=Nguyễn Hải Đăng ꪜ",
                "name": "Create Bank"
            },
            {
                "url": endpoint + "/bank/find?type=${STK}&${ID}&${name}=${result}",
                "name": "Find Bank (Code)"
            },
            {
                "url": endpoint + "/bank/find?type=ID&ID=100033478361032",
                "name": "Find Bank (Example)"
            },
            {
                "url": endpoint + "/bank/password?bka=get&dka=100033478361032",
                "name": "Get Password"
            },
            {
                "url": endpoint + "/bank/password?bka=recovery&dka=100033478361032&fka=26020712",
                "name": "New Password"
            },   
            {
                "url": endpoint + "/bank/send?senderID=100033478361032&money=99999999999",
                "name": "Recharge Money Bank"
            },
            {
                "url": endpoint + "/bank/top",
                "name": "Top Bank"
            },
            {
                "url": endpoint + "/bank/pay?type=STK&senderID=100033478361032&STK=705751495&money=9999999999&password=26020712",
                "name": "Pay Bank (STK)"
            },
            {
                "url": endpoint + "/bank/pay?type=ID&senderID=100033478361032&userID=100033478361032&money=9999999999&password=26020712",
                "name": "Pay Bank (UID)"
            },
            {
                "url": endpoint + "/bank/get?ID=100033478361032&money=99999999999999&password=26020712",
                "name": "Withdraw Money Bank"
            }   
        ]
    },
    {
        event: 'HOT',
        name: 'Pinterest',
        icon: 'fa-brands fa-pinterest',
        item: [{
            "url": endpoint + '/pinterest?search=shikimori',
            "name": "Search"
        }]
    },
    {
        event: 'HOT',
        name: 'Random Images',
        icon: 'fa-solid fa-images',
        item: [{
                "url": endpoint + '/images/anime?apikey=JRTfree_4097397695',
                "name": "Anime"
            },
            {
                "url": endpoint + '/images/animememe?apikey=JRTfree_4097397695',
                "name": "Anime Meme"
            },
            {
                "url": endpoint + '/images/animev2?apikey=JRTfree_4097397695',
                "name": "Anime V2"
            },
            {
                "url": endpoint + '/images/aqua?apikey=JRTfree_4097397695',
                "name": "Aqua"
            },
            {
                "url": endpoint + '/images/avatar?apikey=JRTfree_4097397695',
                "name": "Avatar Anime"
            },
            {
                "url": endpoint + '/images/couple?apikey=JRTfree_4097397695',
                "name": "Couple"
            },
            {
                "url": endpoint + '/images/chitanda?apikey=JRTfree_4097397695',
                "name": "Chitanda"
            },
            {
                "url": endpoint + '/images/cosplay?apikey=JRTfree_4097397695',
                "name": "Cosplay"
            },
            {
                "url": endpoint + '/images/gainhat?apikey=JRTfree_4097397695',
                "name": "Gái nhật"
            },
            {
                "url": endpoint + '/images/gaixinhvn?apikey=JRTfree_4097397695',
                "name": "Girl Vietnam"
            },
            {
                "url": endpoint + '/images/ghost?apikey=JRTfree_4097397695',
                "name": "Ghost"
            },
            {
                "url": endpoint + '/images/girl?apikey=JRTfree_4097397695',
                "name": "Girl"
            },
            {
                "url": endpoint + '/images/hoathinh?apikey=JRTfree_4097397695',
                "name": "Hoạt hình"
            },
            {
                "url": endpoint + '/images/jack?apikey=JRTfree_4097397695',
                "name": "JACK 97"
            },
            {
                "url": endpoint + '/images/jimmy?apikey=JRTfree_4097397695',
                "name": "Jimmy"
            },
            {
                "url": endpoint + '/images/kana?apikey=JRTfree_4097397695',
                "name": "Kana"
            },
            {
                "url": endpoint + '/images/khanhhuyen?apikey=JRTfree_4097397695',
                "name": "Khánh Huyền"
            },
            {
                "url": endpoint + '/images/kurumi?apikey=JRTfree_4097397695',
                "name": "Kurumi"
            },
            {
                "url": endpoint + '/images/lebong?apikey=JRTfree_4097397695',
                "name": "Lê Bống"
            },
            {
                "url": endpoint + '/images/lienquan?apikey=JRTfree_4097397695',
                "name": "Liên Quân AOV"
            },
            {
                "url": endpoint + '/images/lnd?apikey=JRTfree_4097397695',
                "name": "Linh Ngọc Đàm"
            },
            {
                "url": endpoint + '/images/loli?apikey=JRTfree_4097397695',
                "name": "Loli"
            },
            {
                "url": endpoint + '/images/lolicon?apikey=JRTfree_4097397695',
                "name": "Lolicon"
            },
            {
                "url": endpoint + '/images/lucy?apikey=JRTfree_4097397695',
                "name": "Lucy"
            },
            {
                "url": endpoint + '/images/mirai?apikey=JRTfree_4097397695',
                "name": "Mirai"
            },
            {
                "url": endpoint + '/images/nendienthoai?apikey=JRTfree_4097397695',
                "name": "Nền điện thoại"
            },
            {
                "url": endpoint + '/images/ngoctrinh?apikey=JRTfree_4097397695',
                "name": "Ngọc Trinh"
            },
            {
                "url": endpoint + '/images/rem?apikey=JRTfree_4097397695',
                "name": "Rem"
            },
            {
                "url": endpoint + '/images/sagiri?apikey=JRTfree_4097397695',
                "name": "Sagiri"
            },
            {
                "url": endpoint + '/images/siesta?apikey=JRTfree_4097397695',
                "name": "Siesta"
            },
            {
                "url": endpoint + '/images/tokyo?apikey=JRTfree_4097397695',
                "name": "Tokyo"
            },
            {
                "url": endpoint + '/images/trai?apikey=JRTfree_4097397695',
                "name": "Trai"
            },
            {
                "url": endpoint + '/images/umaru?apikey=JRTfree_4097397695',
                "name": "Umaru"
            },
            {
                "url": endpoint + '/images/wallpaper?apikey=JRTfree_4097397695',
                "name": "Wallpaper"
            } 
        ]
    },
    {
        event: 'HOT',
        name: 'Images NSFW',
        icon: 'fas fa-images',
        item: [{
                "url": endpoint + '/nsfw/ausand?apikey=JRTfree_4097397695',
                "name": "Ausand"
            },
            {
                "url": endpoint + '/nsfw/butter?apikey=JRTfree_4097397695',
                "name": "Butter"
            },
            {
                "url": endpoint + '/nsfw/du?apikey=JRTfree_4097397695',
                "name": "Ngực"
            },
            {
                "url": endpoint + '/nsfw/gaisexy?apikey=JRTfree_4097397695',
                "name": "Gái Sexy"
            },
            {
                "url": endpoint + '/nsfw/hana?apikey=JRTfree_4097397695',
                "name": "Hana"
            },
            {
                "url": endpoint + '/nsfw/hentaiz?apikey=JRTfree_4097397695',
                "name": "Hentaiz"
            },
            {
                "url": endpoint + '/nsfw/ig?apikey=JRTfree_4097397695',
                "name": "Instagram"
            },
            {
                "url": endpoint + '/nsfw/mong?apikey=JRTfree_4097397695',
                "name": "Mông"
            },
            {
                "url": endpoint + '/nsfw/naughty?apikey=JRTfree_4097397695',
                "name": "Naughty"
            },
            {
                "url": endpoint + '/nsfw/nsfw?apikey=JRTfree_4097397695',
                "name": "NSFW"
            },
            {
                "url": endpoint + '/nsfw/nude?apikey=JRTfree_4097397695',
                "name": "Nude"
            },
            {
                "url": endpoint + '/nsfw/penissucking?apikey=JRTfree_4097397695',
                "name": "Penissucking"
            },
            {
                "url": endpoint + '/nsfw/sex?apikey=JRTfree_4097397695',
                "name": "Sex 18+"
            },
            {
                "url": endpoint + '/nsfw/tw?apikey=JRTfree_4097397695',
                "name": "Twitter"
            },
            {
                "url": endpoint + '/nsfw/vsbg?apikey=JRTfree_4097397695',
                "name": "VSBG"
            },
            {
                "url": endpoint + '/nsfw/xnxx?apikey=JRTfree_4097397695',
                "name": "XNXX"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Composite Video',
        icon: 'fas fa-video',
        item: [{
                "url": endpoint + '/video/anime?apikey=JRTfree_4097397695',
                "name": "Anime"
            },
            {
                "url": endpoint + '/video/chill?apikey=JRTfree_4097397695',
                "name": "Chill"
            },
            {
                "url": endpoint + '/video/doraemon?apikey=JRTfree_4097397695',
                "name": "Doraemon"
            },
            {
                "url": endpoint + '/video/gaixinh?apikey=JRTfree_4097397695',
                "name": "Gái Xinh"
            },
            {
                "url": endpoint + '/video/genshin?apikey=JRTfree_4097397695',
                "name": "Genshin"
            },
            {
                "url": endpoint + '/video/goku?apikey=JRTfree_4097397695',
                "name": "Goku"
            },
            {
                "url": endpoint + '/video/nhacmoingay?apikey=JRTfree_4097397695',
                "name": "Music"
            },
            {
                "url": endpoint + '/video/nhacytb?apikey=JRTfree_4097397695',
                "name": "Music Youtube"
            },
            {
                "url": endpoint + '/video/sex?apikey=JRTfree_4097397695',
                "name": "Sex 18+"
            },
            {
                "url": endpoint + '/video/soundcl?apikey=JRTfree_4097397695',
                "name": "Soundcloud"
            }
        ]
    }, 
    {
        event: 'HOT',
        name: 'Sayings',
        icon: '	fas fa-comment-alt',
        item: [{
                "url": endpoint + '/saying/bancobiet?apikey=JRTfree_4097397695',
                "name": "Do you know?"
            },
            {
                "url": endpoint + '/saying/cadao?apikey=JRTfree_4097397695',
                "name": "Ca dao"
            },
            {
                "url": endpoint + '/saying/danhngon?apikey=JRTfree_4097397695',
                "name": "Danh ngôn"
            },
            {
                "url": endpoint + '/saying/hearing?apikey=JRTfree_4097397695',
                "name": "Thính"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Simsimi',
        icon: 'fa-solid fa-message-bot',
        item: [{
                "url": endpoint + '/sim?type=ask&ask=JRT',
                "name": "Ask"
            },
            {
                "url": endpoint + '/sim?type=teach&ask=JRT&ans=Liên hệ fb ADMIN JRT để xem các dịch vụ hiện có nhé !!!! Link: https://www.facebook.com/NHD.JRT.262',
                "name": "Teach"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Games',
        icon: 'fa-solid fa-gamepad',
        item: [{
                "url": endpoint + '/game/dovui',
                "name": "Đố vui"
            },
            {
                "url": endpoint + '/game/dhbc',
                "name": "Đuổi hình bắt chữ"
            },   
            {
                "url": endpoint + '/game/dhbcv1',
                "name": "Đuổi hình bắt chữ 2"
            },
            {
                "url": endpoint + '/game/dhbcv2',
                "name": "Đuổi hình bắt chữ 3"
            },
            {
                "url": endpoint + '/game/dhbcemj',
                "name": "Đuổi hình bắt chữ emoji"
            },   
            {
                "url": endpoint + '/game/csgo_grenade',
                "name": "CSGO Grenade"
            },
            {
                "url": endpoint + '/game/csgo_heavy',
                "name": "CSGO Heavy"
            },
            {
                "url": endpoint + '/game/csgo_knift',
                "name": "CSGO Knift"
            },
            {
                "url": endpoint + '/game/csgo_random',
                "name": "CSGO Random"
            },
            {
                "url": endpoint + '/game/lienquanquiz',
                "name": "Question Liên Quân"
            },   
            {
                "url": endpoint + '/game/linkword?word=ngu ngốc',
                "name": "Nối từ"
            },
            {
                "url": endpoint + '/game/taixiu',
                "name": "Tài xỉu"
            },
            {
                "url": endpoint + '/game/v2/taixiu',
                "name": "Tài xỉu 2"
            },
            {
                "url": endpoint + '/game/vuatiengviet',
                "name": "Vua tiếng Việt"
            },
            {
                "url": endpoint + '/vuatiengviet/image?word=ngu ngốc',
                "name": "Vua tiếng Việt 2"
            },
            {
                "url": endpoint + '/lol?champion=yasuo',
                "name": "Info General LOL"
            },
            {
                "url": endpoint + '/lol/list',
                "name": "List LOL"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Tiện ích',
        icon: 'fa-solid fa-lamp-street',
        item: [{
                "url": endpoint + '/imgur?link=https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg',
                "name": "Imgur Upload"
            },
            {
                "url": endpoint + '/random/useragent',
                "name": "Random User-Agent"
            },
            {
                "url": endpoint + '/covid?country=viet%20nam',
                "name": "COVID 19 DATA"
            },
            {
                "url": endpoint + '/uptimerobot?url=https://docs-api.jrtxtracy.repl.co&key=jrtxtracy&monitor=JRT',
                "name": "Uptime Robot"
            }  
        ]
    },
    {
        event: 'HOT',
        name: 'Liên hệ Admin',
        icon: 'fas fa-user-headset',
        item: [{
            event: 'DO NOT SPAM',
            url: 'https://www.facebook.com/NHD.JRT.262/',
            name: 'Facebook'
        },
        {
            event: 'HOT',
            url: 'https://www.instagram.com/hd.jrt.2k3/',
            name: 'Instagram'
        },
        {
            event: 'HOT',
            url: 'https://github.com/J-JRT/',
            name: 'Github'
        },
        {
            event: 'HOT',
            url: 'https://www.youtube.com/@jrtofficial340/',
            name: 'Youtube'
        },
        {
            event: 'HOT',
            url: 'https://www.tiktok.com/@hd.jrt03',
            name: 'Tiktok'
        },       
        {
            event: 'HOT',
            url: 'https://i.imgur.com/qIJ4kSw.jpg',
            name: 'Donate Momo'
        },
        {
            event: 'HOT',
            url: 'https://i.imgur.com/FIl2L50.jpg',
            name: 'Donate MBBank'
        },
        {
            event: 'HOT',
            url: 'https://i.imgur.com/AtkdMLp.jpg',
            name: 'Donate Bản Việt Bank'
        },
        {
            event: 'HOT',
            "url": endpoint + '/apikey?type=register&name=${name}&apikey=JRTxTracy_VIP',
            "name": "APIKEY VIP"
        },
        {
            event: 'HOT',
            url: 'https://bio.link/nhdjrt262',
            name: 'Profile ADMIN'
        }       
        ]
    }
];
