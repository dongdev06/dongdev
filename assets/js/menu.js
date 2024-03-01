try {
	//-- tag html control
	item_fc = document.querySelector('[data-widget=treeview]');
	item_msg = document.querySelector('#notify');
	if (isDocs == undefined) {
		tag_pengunjung = document.querySelector('span#pengunjung_length');
		tag_cpu = document.querySelector('span#cpu_usage');
		tag_clock = document.querySelector('span#clock');
		tag_battery_status = document.querySelector('small#battery_status');
		tag_battery_level = document.querySelector('span#battery_level');
		tag_netinfo = document.querySelector('#informationnet');
		//popup request menu
		function requestmenu() {
			var Toast = Swal.mixin({
				showClass: {
					popup: 'animate__bounceInRight'
				},
				hideClass: {
					popup: 'animate__bounceOutRight'
				},
				toast: true,
				position: 'top-end',
				showConfirmButton: false,
				timer: 3500,
				timerProgressBar: true
			})
			let tks = "",
			date = new Date();
			var dataDays = holiday(date.getDate(), date.getMonth())
			if (dataDays !== null) {
				tks = `<p style="color: gray;">${dataDays.msg}</p>`;
			}
			else {
				tks = `<p style="color: gray;">Mua src API vui lòng liên hệ Admin!</p>`;
			}

			Toast.fire({
				icon: 'info',
				title: tks
			});
		}
	}
function holiday(day, month) {
	var data = [{
		"msg": "Chúc mừng ngày lễ Quốc khánh",
		"day": 2,
		"month": 9
	},
	{
		"msg": "Sinh nhật Hồng Phấn <3",
		"day": 7,
		"month": 12
	},
	{
		"msg": "Sinh nhật ADMIN JRT <3",
		"day": 26,
		"month": 2
	},	    
	{
		"msg": "Chúc mừng năm mới <3",
		"day": 1,
		"month": 1
	},
	{
		"msg": "Chúc mừng ngày lễ tình nhân <3",
		"day": 2,
		"month": 14
	},
	{
		"msg": "Chúc mừng ngày quốc tế lao động",
		"day": 5,
		"month": 1
	}]
	var resulut = data.find(i => i.day == day && i.month == month + 1)
	return resulut
}
	//-- Auto autocapitalize
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
	}

	//-- menu documentation
	for (var e of item_list) {
		coder = `<li class="nav-item">
		<a href="#" class="nav-link">
		<i class="${e.icon.trim()} nav-icon"></i>
		<p>
		${capitalizeFirstLetter(e.name.trim())}
		<i class="right fas fa-angle-left"></i>
		${e.event ? `<span class="right badge badge-danger">${e.event.trim()}</span>`: ``}
		</p>
		</a>
		<ul class="nav nav-treeview">
		%item$
		</ul>
		</li>
		`;
		item_coder = "";
		for (var ee of e.item) {
			item_coder += `<li class="nav-item">
			<a href="${ee.url.trim()}" ${ee.error ? 'disabled="disabled"': ""} target="_blank" class="nav-link">
			<!--<i class="far fa-circle nav-icon"></i>-->
			<p>
			- ${capitalizeFirstLetter(ee.name.trim())}
			${ee.event ? `<span class="right badge badge-danger">${ee.event.trim()}</span>`: ``}
			${ee.error ? `<span class="right badge badge-danger">ERROR</span>`: ``}
			</p>
			</a>
			</li>`;
		}

		item_fc.innerHTML += coder.replace('%item$', item_coder);
	}

	if (isDocs == undefined) {
		//-- Browser information
		information = document.querySelector('#information');
		repeatinfo = setInterval(function() {
			information.innerHTML = `<b>📝 Mã trình duyệt:</b> ${navigator.appCodeName}<br><b>🌐 Tên trình duyệt:</b> ${navigator.appName}<br><b>🍪 Cookies:</b> ${navigator.cookieEnabled}<br><b>🟢 Trạng thái hoạt động:</b> ${navigator.onLine}<br><b>🔐 Nền tảng:</b> ${navigator.platform} <br>
			<b>👤 User-Agent:</b> ${navigator.userAgent} <br><b>⏰ Thời gian: </b> ${new Date()}`;
		}, 10);

		//-- CPU Usage detection
		let rss_size = "0B";
		fetch("https://hadi-api.herokuapp.com/system/about?rss="+encodeURIComponent(rss_size)).then(res=>res.text()).then(res=> {
			rss_size = res;
			tag_cpu.innerHTML = `${res}<small>/ 2000MB</small>`;
		});
		setInterval(function() {
			fetch("https://hadi-api.herokuapp.com/system/about?rss="+encodeURIComponent(rss_size)).then(res=>res.text()).then(res=> {
				if (res.trim()) {
					rss_size = res;
					tag_cpu.innerHTML = `${res}<small>/ 2000MB</small>`;
				} else {}
			});
		}, 2000);

		//-- pengunjung visitor length
		if (localStorage.getItem('Pengunjung')) {
			setInterval(function() {
				fetch("https://api.diennguuvc.repl.co/total_request?admin=true").then(res=>res.json()).then(res=> {
					tag_pengunjung.innerHTML = res.total+" <small>người</small>";
				});
			}, 2500);
		} else {
			fetch("https://api.diennguuvc.repl.co/total_request").then(res=>res.json()).then(res=> {
				localStorage.setItem('Pengunjung', 'true');
				tag_pengunjung.innerHTML = res.total+" <small>người</small>";
			});
		}
	}
	//-- time set live
	function time(time) {
		time2 = new Date().getTime();
		msec = time2 - Number(time);
		detik = msec/1000;
		menit = detik/60;
		jam = menit/60;
		hari = jam/24;
		minggu = hari/7;
		jam_str = Number(String(jam).split('.')[0]);
		menit_str = Number(String(menit).split('.')[0]);
		detik_str = Number(String(detik).split('.')[0]);
		hari_str = Number(String(hari).split('.')[0]);
		minggu_str = Number(String(minggu).split('.')[0]);

		if (minggu_str > 0 && minggu_str < 7) {
			return `<small>${minggu_str} tuần trước</small>`;
		} else if (minggu > 52.1428571 && minggu_str > 7) {
			return `<small>vài năm trước</small>`;
		} else if (detik < 60 && detik_str > 0) {
			return `<small>${detik_str} giây trước</small>`;
		} else if (menit < 60 && menit_str > 0) {
			return `<small>${menit_str} phút trước</small>`;
		} else if (jam < 24 && jam_str > 0) {
			return `<small>${jam_str} giờ trước</small>`;
		} else if (hari < 7 && hari_str > 0) {
			return `<small>${hari_str} ngày trước</small>`;
		} else {
			return `<small>${hari_str} ngày trước</small>`;
		}
	}
	msg = `<span class="dropdown-item dropdown-header">Thông báo ($jumlah)</span><!--$item--><div class="dropdown-divider"></div>
	<a href="#" class="dropdown-item dropdown-footer">Xem tất cả thông báo</a>`;
	msg_ = ``;

	for (var e = 0; e < message_list.length; e++) {
		msg_ += `<div class="dropdown-divider"></div>
		<a href="#" class="dropdown-item">
		<i class="${message_list[e].icon.trim()} mr-2"></i> ${message_list[e].title.length > 17 ? `<small>${message_list[e].title.trim()}</small>`: `${message_list[e].title.trim()}`}
		<span class="float-right text-muted text-sm" id="time" time="${message_list[e].timing.trim()}"></span>
		</a>`;
	}
	msg = msg.replace('<!--$item-->', msg_);
	msg = msg.replace('$jumlah', message_list.length);

	item_msg.innerHTML = msg;

	document.querySelector('span#notify_length').innerHTML = message_list.length;
	timingset = document.querySelectorAll('span#time');
	timingeval = `setInterval(function() {`;

	for (var e = 0; e < timingset.length; e++) {
		timingeval += `timingset[${e}].innerHTML = time(timingset[${e}].getAttribute('time'));`;
	}
	timingeval += `},10);`;

	eval(timingeval);
	if (isDocs == undefined) {
		//-- clock
		function duo(s) {
			return s < 10 ? "0"+s: s;
		}
		function oud(s) {
			return s < 10 ? s+"0": s;
		}

		setInterval(function() {

			jam = duo(new Date().getHours());
			menit = duo(new Date().getMinutes());
			detik = duo(new Date().getSeconds());

			tag_clock.innerHTML = `${jam}:${menit}:${detik}`;
		},
			10);

		//-- Battery
		setInterval(function() {
			navigator.getBattery().then(battery=> {
				battery_level = String(battery.level).split('.')[1];
				tag_battery_level.innerHTML = `${(battery_level.length <= 1)? oud(Number(battery_level)): battery_level}%`;
			});
		},
			10);

		//-- network information
		let region = navigator.language;
		let isVPN = false;
		function net() {
			fetch('https://hadi-api.herokuapp.com/api/ip').then(res=>res.json()).then(res=> {
				res = res.result;
				if (!region.includes(res.countryCode)) isVPN = true;
				tag_netinfo.innerHTML = `<b>Địa chỉ IP: </b>${res.ip}<br><b>Nhà cung cấp mạng: </b>${res.isp}<br><b>Thành phố: </b>${res.city}<br><b>Timezone: </b>${res.timezone}<br><b>Quốc gia: </b>${res.country}<br><b>VPN: </b>${region.includes(res.countryCode) ? "false": "true"}<br>`;
			});
		}
		net();
		try {
			console.log(nomusic);
		}catch(e) {
			swal.fire({
				title: 'Bạn có muốn phát bài hát của riêng bạn từ youtube không?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes',
				cancelButtonText: `No`,
			}).then((result) => {

				if (result.isConfirmed) {
					swal.fire({
						title: 'Vui lòng nhập url Youtube vào đây!',
						input: 'url',
						inputAttributes: {
							autocapitalize: 'off',
							pattern: '^https?:\/\/(www.)?(youtu.be\/)?(youtube.com\/watch)?.*'
						},
						showLoaderOnConfirm: true,
						confirmButtonText: 'Phát!',
						showCancelButton: true,
						preConfirm: (value)=> {
							if (!/^https?\:\/\/(www\.|m\.)?(youtube\.com\/watch\?v=|youtu\.be\/)(.+$)/.test(value)) {
								Swal.showValidationMessage(
									`Url bạn đã nhập không hợp lệ!`
								);
							} else {
								return fetch('https://hadi-api.herokuapp.com/api/yt2/audio?url='+value).then(resp=>resp.json()).then(resp=> {
									if (resp.status == 200) {
										var audio = document.createElement('audio');
										audio.autoplay = "autoplay";
										audio.src = resp.result.download_audio;
										audio.onended = function() {
											Swal.fire({
												title: 'Bản nhạc đã kết thúc bạn có muốn phát lại không?',
												icon: 'warning',
												showCancelButton: true,
												confirmButtonText: 'Yes',
												cancelButtonText: `No`,
											}).then(answer=> {
												if (answer.isConfirmed) {
													document.querySelector('audio').play()
												}
											})
										}
										document.body.appendChild(audio);
										requestmenu();
									} else {
										Swal.showValidationMessage(
											`Kiểm tra lại url bạn đã nhập!`
										)
									}
								})
							}
						}
					}).then(answer=> {
						requestmenu();
					})
				} else {
					requestmenu();
				}
			})
		}
	}
}catch(e) {
	console.log("pass")
}
