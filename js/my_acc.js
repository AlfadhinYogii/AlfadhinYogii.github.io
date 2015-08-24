// JavaScript Document
function validateForm() {
			
	        if (document.MyAccount.name.value == "") {
	            alert("please input your name");
	            document.forms['MyAccount'].name.focus();
	            return false;
	        } else if (document.MyAccount.address.value == "") {
	            alert("please input your address");
	            document.forms['MyAccount'].address.focus();
	            return false;
	        } else if (document.MyAccount.phone.value ==""){
				alert("please input your phone number");
				document.forms['MyAccount'].phone.focus();
				return false;
			} else if (document.MyAccount.email.value ==""){
				alert("please input your email address");
				document.forms['MyAccount'].email.focus();
				return false;
			} else if (document.MyAccount.old_pass.value ==""){
				alert("input your old password");
				document.forms['MyAccount'].old_pass.focus();
				return false;
			}else if (document.MyAccount.new_pass.value ==""){
				alert("please input your new password");
				document.forms['MyAccount'].new_pass.focus();
				return false;
			}else if (document.MyAccount.confirm_.value ==""){
				alert("re-type your new password");
				document.forms['MyAccount'].confirm_.focus();
				return false;
			} else if (!document.MyAccount.agree.checked) {
	            alert("Anda belum menyetujui bahwa data anda benar!");
	            return false;
	        } else {
	            document.MyAccount.submit();
	        }
	    }
