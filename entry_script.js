
function correctTypo(id) {
	var sentence = document.getElementById('sentence' + id);
	sentence.style.display = 'block';
}

		function setSpoiler() {
			if (document.getElementById('spoiler').checked) {
				document.cookie = "spoiler=1; expires=Thu, 18 Dec 2044 12:00:00 UTC";
				spoilClannad();
			} else {
				document.cookie = "spoiler=0; expires=Thu, 18 Dec 2044 12:00:00 UTC";
				unspoil();
			}
		}
		
		function checkSpoiler() {
			var name = "spoiler=";
			var ca = document.cookie.split(';');
			for(var i = 0; i <ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					if(c.substring(name.length,c.length) === '1') {
						return true;
					}
				}
			}
			return false;
		}
		
		function spoilClannad() {
			var sunoharaDies = document.getElementsByClassName('engsentence');
			for (var i = 0; i < sunoharaDies.length; i++) {
				sunoharaDies[i].className += ' spoiled';
			}
		}
		
		function unspoil() {
			var spo = document.getElementsByClassName('engsentence');
			for (var i = 0; i < spo.length; i++) {
				spo[i].className = spo[i].className.replace(/spoiled/, '');
			}
		}
		
		onload = function () {
			document.getElementById('spoiler_container').style.display = 'block';
			var s = document.getElementById('spoiler');
			s.onclick = setSpoiler;
			s.onpropertychange = s.oninput;
			
			if(checkSpoiler()) {
				s.checked = true;
				spoilClannad();
			}
		};