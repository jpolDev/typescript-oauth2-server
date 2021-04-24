(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{366:function(t,e,n){"use strict";n.r(e);var r=n(41),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"frontmatter-title"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),n("p",[t._v("Grants are different ways a "),n("RouterLink",{attrs:{to:"/glossary/#client"}},[t._v("client")]),t._v(" can obtain an "),n("code",[t._v("access_token")]),t._v(" that will authorize it to use the "),n("RouterLink",{attrs:{to:"/glossary/#resource-server"}},[t._v("resource server")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"which-grant"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#which-grant"}},[t._v("#")]),t._v(" Which Grant?")]),t._v(" "),n("p",[t._v("Deciding which grant to use depends on the type of client the end user will be using.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("+-------+\n| Start |\n+-------+\n    V\n    |\n    \n    |\n+------------------------+              +-----------------------+\n| Have a refresh token?  |>----Yes-----\x3e|  Refresh Token Grant  |\n+------------------------+              +-----------------------+\n    V\n    |\n    No\n    |\n+---------------------+                \n|     Who is the      |                  +--------------------------+\n| Access token owner? |>---A Machine----\x3e| Client Credentials Grant |\n+---------------------+                  +--------------------------+\n    V\n    |\n    |\n   A User\n    |\n    |\n+----------------------+                \n| What type of client? |   \n+----------------------+     \n    |\n    |                                 +---------------------------+\n    |>-----------Server App----------\x3e| Auth Code Grant with PKCE |\n    |                                 +---------------------------+\n    |\n    |                                 +---------------------------+\n    |>-------Browser Based App-------\x3e| Auth Code Grant with PKCE |\n    |                                 +---------------------------+\n    |\n    |                                 +---------------------------+\n    |>-------Native Mobile App-------\x3e| Auth Code Grant with PKCE |\n                                      +---------------------------+\n\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);