(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{363:function(s,t,e){"use strict";e.r(t);var a=e(25),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h4",{attrs:{id:"change-centos-7-gui-to-mate-desktop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#change-centos-7-gui-to-mate-desktop"}},[s._v("#")]),s._v(" change CentOs 7 GUI to Mate-desktop")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y epel-release\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum groupinstall -y "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MATE Desktop"')]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# remove(if needed)")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum groupremove -y "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MATE Desktop"')]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum autoremove -y\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# switch mate themes")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".  download themes here: https://mate-desktop.org/themes/\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".  put download "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" at "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ~/.themes\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" you can "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" it "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" System/Preference/Look and Feel/Apperance/theme\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".  download icons here: https://www.mate-look.org/s/Mate/browse/cat/132/ord/rating/\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".  put download "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" at "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" ~/.local/share/icons\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(".  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" go to "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" System/Preference/Look and Feel/Apperance/theme, click customize\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" icons\n\n")])])]),e("h4",{attrs:{id:"vpn-server-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vpn-server-config"}},[s._v("#")]),s._v(" vpn server config")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止root用户远程登录")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/#PermitRootLogin yes/PermitRootLogin no/'")]),s._v(" /etc/ssh/sshd_config\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd restart\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机启用/禁用防火墙")]),s._v("\nsystemctl enable/disable firewalld.service\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 firewalld-cmd")]),s._v("\n\nfirewall-cmd --zone"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("/tcp --permanent \nfirewall-cmd --reload\nfirewall-cmd --zone"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --list-ports\n\nfirewall-cmd --permanent --add-rich-rule"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rule family="')]),s._v("ipv4"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('" source address="')]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".196.131"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('" port protocol="')]),s._v("tcp"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('" port="')]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8088")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('" accept"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许192.168.1.10所有访问所有端口")]),s._v("\nfirewall-cmd --zone"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-rich-rule "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'rule family="ipv4" source address="192.168.196.131" accept\'')]),s._v(" --permanent\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# [CentOS 7 firewall防火墙屏蔽除指定IP外的所有IP](https://www.openos.org/post/340/)")]),s._v("\n")])])]),e("h4",{attrs:{id:"certificate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#certificate"}},[s._v("#")]),s._v(" certificate")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("restorecon -v -R /etc/nginx\n\n")])])]),e("h3",{attrs:{id:"nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" Nginx")]),s._v(" "),e("ul",[e("li",[s._v("sudo systemctl start nginx")]),s._v(" "),e("li",[s._v("root directory :usr/share/nginx/html")]),s._v(" "),e("li",[s._v("sudo ./nginx -t")])])])}),[],!1,null,null,null);t.default=n.exports}}]);