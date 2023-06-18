(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{615:function(v,_,l){"use strict";l.r(_);var i=l(2),t=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"数据结构-哈希表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据结构-哈希表"}},[v._v("#")]),v._v(" 数据结构---哈希表")]),v._v(" "),_("h3",{attrs:{id:"哈希表介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#哈希表介绍"}},[v._v("#")]),v._v(" 哈希表介绍")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("哈希表通常是基于"),_("strong",[v._v("数组")]),v._v("实现的")]),v._v(" "),_("ol",[_("li",[v._v("无论多少数据，插入和删除值需要接近常量的时间，即O（1）的时间级，实际上，只需要几个"),_("strong",[v._v("机器指令")]),v._v("就可以完成")]),v._v(" "),_("li",[v._v("他可以提供非常快速的"),_("strong",[v._v("插入--删除--查找操作")])]),v._v(" "),_("li",[v._v("哈希表的速度比"),_("strong",[v._v("树还要快")]),v._v("，基本可以瞬间查找到想要的元素")]),v._v(" "),_("li",[v._v("哈希表相对于树来说编码要容易很多")])])]),v._v(" "),_("li",[_("p",[v._v("哈希表对于数组的一些不足")]),v._v(" "),_("ol",[_("li",[v._v("哈希表中的数据是没有顺序的，所以不能以一种固定的方式（比如排序）来遍历其中的元素")]),v._v(" "),_("li",[v._v("通常情况下，哈希表中的key是不允许重复的，不能放置相同的key，用于保存不同的元素")])])]),v._v(" "),_("li",[_("p",[v._v("哈希表到底是什么？")]),v._v(" "),_("ol",[_("li",[_("strong",[v._v("他的结构就是数组")]),v._v("，但是他神奇的地方在于对"),_("strong",[v._v("下标值的一种变换")]),v._v("，这种变换我们可以称之为"),_("strong",[v._v("哈希函数")]),v._v("，通过哈希函数可以获取到"),_("strong",[v._v("HashCode")])]),v._v(" "),_("li",[v._v("哈希函数：通过将单词转换成唯一 的大数字（例如幂的连乘），大数字在进行哈希化的代码实现放在一个函数中")]),v._v(" "),_("li",[v._v("哈希化：将大数字转换为数组下标的过程")]),v._v(" "),_("li",[v._v("哈希表：最终将数据插入到的这个数组，对整个结构的封装，我们就称之为是一个哈希表")]),v._v(" "),_("li",[v._v("解决冲突方案\n"),_("ul",[_("li",[v._v("链地址法(拉链法)：每个数据单元不再存储单一一个元素，而是使用数组或者链表，然后查找过程变成先查到数据单元地址，再进入数组或链表查找")]),v._v(" "),_("li",[v._v("开放地址法：寻找"),_("strong",[v._v("空白的位置")]),v._v("来放置冲突的数据项\n"),_("ol",[_("li",[v._v("线性探测\n"),_("ul",[_("li",[v._v("插入的时候就是，哈希化后的index，从index+1一点点寻找合适的空白位置放置该数据")]),v._v(" "),_("li",[v._v("查询的时候得到index，然后比较，在通过index+1去查询比较")]),v._v(" "),_("li",[v._v("删除的时候不可以将这个下标设置为null，会影响后续的查询其他操作，应该进行特殊处理（例如设置为-1）")]),v._v(" "),_("li",[v._v("缺点就是聚集，聚集会影响性能")])])]),v._v(" "),_("li",[v._v("二次探测\n"),_("ul",[_("li",[v._v("对步长做了优化，比如下标值x+1，x+2^2,x+3^2")])])]),v._v(" "),_("li",[v._v("再哈希法\n"),_("ul",[_("li",[v._v("把关键字用另一个哈希函数，再进行一次哈希化，用这个结果作为步长")])])])])])])])])])])])}),[],!1,null,null,null);_.default=t.exports}}]);