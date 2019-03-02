<template>
  <div class="app">

    <div id="pageInit" v-show="pageInit">
      <img
        src="data:image/gif;base64,R0lGODlhIAAgALMAAP///7Ozs/v7+9bW1uHh4fLy8rq6uoGBgTQ0NAEBARsbG8TExJeXl/39/VRUVAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQAAACwAAAAAIAAgAAAE5xDISSlLrOrNp0pKNRCdFhxVolJLEJQUoSgOpSYT4RowNSsvyW1icA16k8MMMRkCBjskBTFDAZyuAEkqCfxIQ2hgQRFvAQEEIjNxVDW6XNE4YagRjuBCwe60smQUDnd4Rz1ZAQZnFAGDd0hihh12CEE9kjAEVlycXIg7BAsMB6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YEvpJivxNaGmLHT0VnOgGYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHQjYKhKP1oZmADdEAAAh+QQFBQAAACwAAAAAGAAXAAAEchDISasKNeuJFKoHs4mUYlJIkmjIV54Soypsa0wmLSnqoTEtBw52mG0AjhYpBxioEqRNy8V0qFzNw+GGwlJki4lBqx1IBgjMkRIghwjrzcDti2/Gh7D9qN774wQGAYOEfwCChIV/gYmDho+QkZKTR3p7EQAh+QQFBQAAACwBAAAAHQAOAAAEchDISWdANesNHHJZwE2DUSEo5SjKKB2HOKGYFLD1CB/DnEoIlkti2PlyuKGEATMBaAACSyGbEDYD4zN1YIEmh0SCQQgYehNmTNNaKsQJXmBuuEYPi9ECAU/UFnNzeUp9VBQEBoFOLmFxWHNoQw6RWEocEQAh+QQFBQAAACwHAAAAGQARAAAEaRDICdZZNOvNDsvfBhBDdpwZgohBgE3nQaki0AYEjEqOGmqDlkEnAzBUjhrA0CoBYhLVSkm4SaAAWkahCFAWTU0A4RxzFWJnzXFWJJWb9pTihRu5dvghl+/7NQmBggo/fYKHCX8AiAmEEQAh+QQFBQAAACwOAAAAEgAYAAAEZXCwAaq9ODAMDOUAI17McYDhWA3mCYpb1RooXBktmsbt944BU6zCQCBQiwPB4jAihiCK86irTB20qvWp7Xq/FYV4TNWNz4oqWoEIgL0HX/eQSLi69boCikTkE2VVDAp5d1p0CW4RACH5BAUFAAAALA4AAAASAB4AAASAkBgCqr3YBIMXvkEIMsxXhcFFpiZqBaTXisBClibgAnd+ijYGq2I4HAamwXBgNHJ8BEbzgPNNjz7LwpnFDLvgLGJMdnw/5DRCrHaE3xbKm6FQwOt1xDnpwCvcJgcJMgEIeCYOCQlrF4YmBIoJVV2CCXZvCooHbwGRcAiKcmFUJhEAIfkEBQUAAAAsDwABABEAHwAABHsQyAkGoRivELInnOFlBjeM1BCiFBdcbMUtKQdTN0CUJru5NJQrYMh5VIFTTKJcOj2HqJQRhEqvqGuU+uw6AwgEwxkOO55lxIihoDjKY8pBoThPxmpAYi+hKzoeewkTdHkZghMIdCOIhIuHfBMOjxiNLR4KCW1ODAlxSxEAIfkEBQUAAAAsCAAOABgAEgAABGwQyEkrCDgbYvvMoOF5ILaNaIoGKroch9hacD3MFMHUBzMHiBtgwJMBFolDB4GoGGBCACKRcAAUWAmzOWJQExysQsJgWj0KqvKalTiYPhp1LBFTtp10Is6mT5gdVFx1bRN8FTsVCAqDOB9+KhEAIfkEBQUAAAAsAgASAB0ADgAABHgQyEmrBePS4bQdQZBdR5IcHmWEgUFQgWKaKbWwwSIhc4LonsXhBSCsQoOSScGQDJiWwOHQnAxWBIYJNXEoFCiEWDI9jCzESey7GwMM5doEwW4jJoypQQ743u1WcTV0CgFzbhJ5XClfHYd/EwZnHoYVDgiOfHKQNREAIfkEBQUAAAAsAAAPABkAEQAABGeQqUQruDjrW3vaYCZ5X2ie6EkcKaooTAsi7ytnTq046BBsNcTvItz4AotMwKZBIC6H6CVAJaCcT0CUBTgaTg5nTCu9GKiDEMPJg5YBBOpwlnVzLwtqyKnZagZWahoMB2M3GgsHSRsRACH5BAUFAAAALAEACAARABgAAARcMKR0gL34npkUyyCAcAmyhBijkGi2UW02VHFt33iu7yiDIDaD4/erEYGDlu/nuBAOJ9Dvc2EcDgFAYIuaXS3bbOh6MIC5IAP5Eh5fk2exC4tpgwZyiyFgvhEMBBEAIfkEBQUAAAAsAAACAA4AHQAABHMQyAnYoViSlFDGXBJ808Ep5KRwV8qEg+pRCOeoioKMwJK0Ekcu54h9AoghKgXIMZgAApQZcCCu2Ax2O6NUud2pmJcyHA4L0uDM/ljYDCnGfGakJQE5YH0wUBYBAUYfBIFkHwaBgxkDgX5lgXpHAXcpBIsRADs="
        alt="">
    </div>
    <div id="mask" v-show="pageInit"></div>

    <div id="tipCenter" style="display: none"></div>

    <div id="part" :class="round === 2 ? 'round2' : 'round1' " v-show="!bHint">
      <ul class="list"
          v-for="(items,j) in currentRound"
          :style="calListStyle(j)">

        <li class="item"
            @touchstart="eventFlag && touchstart($event, j, i)"
            @touchmove="eventFlag && touchmove($event, j, i)"
            @touchend="eventFlag && touchend($event, j, i)"
            v-for="(item, i) in items"
            :id="'item_' + j + '_' + i"
            :data-index="i"
            :data-aIndex="j"
            :style="calItemStyle(j, i, item)">
        </li>

        <li class="item seize"
            :id="'seize_' + j"
            v-show="toggleSeize"
            :style="'top:'
            + (cardTop * (items.length) + wTop) + 'px;width: '
            + cardWidth + 'px; height: '
            + cardHeight + 'px;'">
        </li>

      </ul>
    </div>

    <div :class="{'hintMask': true, 'opacty8': toggleEnd}" v-show="bHint"></div>
    <h3 class="hintTxt" v-show="bHint">{{hintTxt}}</h3>

    <div class="endMask opacty8" v-show="toggleEnd"></div>
    <div class="end" v-show="toggleEnd" @touchend="install($event)">
      <img src="assets/img/end.png" alt="" class="">
    </div>

  </div>

</template>

<style lang="sass">

  body{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .end{
    position: fixed;
    left: 50%;
    top: 50%;
    width: 70%;
    transform: translate(-50%,-50%);
    z-index: 999999999999999;
  }

  .app, #part {
    width: 100%;
    height: 100%;
    min-width: 320px;
  }

  #part {

    .main {
      width: 100%;
      height: 100%;
    }

    .list {
      /*float: left;*/
      position: fixed;
      /*background-image: url("/assets/img/tableaux@3x.png");*/
      background-repeat: no-repeat;
      background-position: left top;
      background-size: contain;
    }

    .item, .seize {
      position: fixed;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    .seize {
      /*background: blueviolet;*/
      text-align: center;
      color: red;
      z-index: 999999999999999;
    }

  }


  #part {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
  }

  .hintTxt{
    position: fixed;
    top: 40%;
    z-index: 10;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 1rem;
  }

  .hintMask, .endMask{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    /*opacity: 0.7;*/
    z-index: 10;
  }

  .endMask{
    z-index: 999999999999999;
  }

  .opacty8{
    opacity: 0.8;
  }

  @keyframes slideInUp {
    from {
      transform: translate3d(0, 300%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

</style>

<script>

	import 'common/scss/animate.min'
	import Vue from 'vue'
	import $ from 'jquery'

	import {aPart1, aPart2} from 'components/config'
	import 'common/js/windvane'
	import util from 'common/js/util'

	let campaignMap = {}

	export default {
		name: 'spider',
		components: {},
		data () {
			return {
				count: 0,
				round: 1,
				toggleEnd: false,
        currentRound: null,
				disX: null,
				disY: null,
        eventFlag: true,
				zIndex: [1, 1, 1],
				baseUnit: null,
				pageInit: true,
				page2Show: false,
				cardWidth: null,
				cardHeight: null,
				wW: null,
				wH: null,
        wTop: null,
        cardTop: null,
				aPart1: null,
				aPart2: null,
				toggleSeize: false,
        countAutoHint: false,
				bHint: true,
				hintTxt: '到你挑战',
        audio: {
					error: null,
					cross: null,
					success: null
        }
			}
		},
		beforeCreate(){},
		created(){
			const me = this

//      me.toggleEnd = true
			setTimeout(() => {
				me.bHint = false
      }, 800)

			setTimeout(() => {
				me.batchSetOffset()
			}, 830)

			this.audio.error = new Audio('assets/audio/error.mp3')
			this.audio.cross = new Audio('assets/audio/cross.mp3')
			this.audio.success = new Audio('assets/audio/success.mp3')

			this.pageInit = false
			this.aPart1 = aPart1
			this.aPart2 = aPart2

      this.currentRound = this.aPart1
			this.wW = $('body').width()
			this.wH = $('body').height()
      this.wTop = this.wH * 0.15
      this.cardTop = this.wH * 0.0475
			this.cardWidth = this.wW * 0.208
			this.cardHeight = this.cardWidth * 1.41

			this.getInfo()
			this.eventInit()
      this.initBg()
      // this.autoHint()

		},
		methods: {

			initBg(){
				setTimeout(() => {
					$('.list').css({
						"background-image": "url('assets/img/tableaux@3x.png')"
					})
					$('body').css({
						"background-image": "url('assets/img/bg_round1.jpg')"
					})
        }, 5)
      },

			calMainStyle(){
				const me = this
        let margin = me.wW * 0.0625 * 2
        let s = 'width: ' + (me.cardWidth * 3 + margin) + 'px;'
        s += 'margin-left: -' + ( (me.cardWidth * 3 + margin) / 2 ) + 'px;'
        return s
      },

			calListStyle(j){
				const me = this
        //console.log('len:', me.aPart1.length)
				let part = 'aPart' + me.round
        let len = me[part].length
        let margin = me.wW * 0.0625
        let l = (me.wW - me.cardWidth * len - margin * (len-1) ) / 2

				let s = 'top:' + me.wTop + 'px;'
				s += 'width:' + me.cardWidth + 'px;'
				s += 'height: ' + me.cardHeight + 'px;'
				s += 'z-index:' + (me['zIndex'][j]) + ';'
				if(j !== 0){
					s += 'left: ' + (me.cardWidth * j + margin * j + l) + 'px;'
				}else{
					s += 'left: ' + l + 'px;'
        }
				return s
			},

			calItemStyle(j, i, item){
				const me = this
//				console.log('top: ', (me.cardTop * i + me.wTop) )
				let s = 'background-image: url(assets/img/lss' + item + '@3x.png);'
        s += 'top:' + (me.cardTop * i + me.wTop) + 'px;'
        s += 'width:' + me.cardWidth + 'px;'
        s += 'height:' + me.cardHeight + 'px;'
        return s
      },

			touchstart(e, j, i){
				e.preventDefault()
        const me = this

				clearInterval(me.countAutoHint)
				me.count = 0

        console.log('count: ', me.count)

        let {max, maxIndex, min, minIndex} = this.findArr(this.zIndex)

//        console.log('max: ', max)
//        console.log('maxIndex: ', maxIndex)
//        console.log('min: ', min)
//        console.log('minIndex: ', minIndex)
//        console.log('j: ', j)

        //if(max === min){
					this['zIndex'][j] = (max+1)
        //}

				this.count = 0
        this.toggleSeize = true
				let touch = e.targetTouches[0]

				this.disX = touch.clientX - e.currentTarget.offsetLeft
				this.disY = touch.clientY - e.currentTarget.offsetTop

        //console.log('disX', this.disX)
        //console.log('disY', this.disY)
			},

			touchmove(e, j, i){

        const me = this
				let el = $('#' + 'item_' + j + '_' + i)

				let touch = e.targetTouches[0]
				let left = touch.clientX - this.disX + 'px'
				let top = touch.clientY - this.disY + 'px'
				el.css({
					left,
					top
				})

        let offset = el.offset()
				let offsetLeft = offset.left
				let offsetTop = offset.top

				let index = el.attr('data-index')
				let aIndex = el.attr('data-aIndex')

				//左侧
				if (offsetLeft <= 0) {
					el.css({
						left: 0
					})
				}

				//右侧
				if (offsetLeft >= me.wW - me.cardWidth) {
					el.css({
						left: me.wW - me.cardWidth + 'px'
					})
				}

				//上面
				if (offsetTop <= 0) {
					el.css({
						top: 0
					})
				}

				//下面
				if (offsetTop >= me.wH - me.cardHeight) {
					el.css({
						top: me.wH - me.cardHeight + 'px'
					})
				}

				let part = 'aPart' + this.round
				// 拖动元素以下的都跟着移动
				let len = me[part][aIndex].length - Number(index)
				for (let i = 0; i < len; i++) {
					let els = $('#item_' + aIndex + '_' + (Number(index) + i))
          console.log('els.offset().left：', els.offset().left)
          console.log('offsetLeft：', offsetLeft)
          $(els).css({
            top: offsetTop + me.cardTop * i,
            left: offsetLeft,
          })

				}

			},

			touchend(e, j, i){
        const me = this
				let el = $('#' + 'item_' + j + '_' + i)
				let index = el.attr('data-index')
				let aIndex = el.attr('data-aIndex')
				let impactIndex = me.findImpactIndex(el, aIndex)
				let part = 'aPart' + this.round

				let impactEl, bImpact
				let aTmp0 = []
				let aTmp1 = []

				if (impactIndex !== false) {
        	console.log('find impactIndex: ', impactIndex)
					impactEl = $('#seize_' + impactIndex)
					bImpact = me.impact(el, impactEl)

          // 取被碰撞数组的最后一个元素
					aTmp0 = me[part][impactIndex].slice(me[part][impactIndex].length-1, me[part][impactIndex].length)

					let len = me[part][aIndex].length - Number(index)
					for (let i = 0; i < len; i++) {
						aTmp1.push(me[part][aIndex][(Number(index) + i)])
					}
				}

				// 碰撞检测
				if (bImpact && aTmp0.length && aTmp1.length && me.checkData(aTmp0, aTmp1)) {
        	console.log('碰撞了。。。')
          me.eventFlag = false
          // 运动到碰撞元素的位置
					let len = me[part][aIndex].length - Number(index)
					for (let i = 0; i < len; i++) {
						let els = $('#item_' + aIndex + '_' + (Number(index) + i))
            let off = impactEl.offset()
						off.top = me.cardTop * i + off.top
						$(els).animate(off)
					}

					this.audio.success.play()

					setTimeout(() => {
						me[part][impactIndex] = me[part][impactIndex].concat(aTmp1)
            console.log('me[part][impactIndex]: ', me[part][impactIndex])
						Vue.set(me[part], [], me[part][impactIndex])
						let len = me[part][aIndex].length - Number(index)
						for (let i = 0; i < len; i++) {
							me.rmArrEl(me[part][aIndex], me[part][aIndex][Number(index)])
						}
          }, 400)

          setTimeout(() => {
						me.batchSetOffset()
						me.checkWin()
						me.eventFlag = true
          }, 430)

				} else {

					me.audio.error.play()

					// 选中都回原位
					let len = me[part][aIndex].length - Number(index)
					for (let i = 0; i < len; i++) {
						let els = $('#item_' + aIndex + '_' + (Number(index) + i))
						let offset = els.attr('data-offset')
						els.animate(JSON.parse(offset))
					}
				}

        this.toggleSeize = false
			},

			batchSetOffset(){
        $.each($('.item'), (i, item) => {
          $(item).attr('data-offset', JSON.stringify($(item).offset()))
        })
      },

			checkData(aTmp0, aTmp1){
				let aRes = []
				let aTmpAll = aTmp0.concat(aTmp1)
				aTmpAll.reduce((a, b) => {
					if ((a - b) === 1) {
						aRes.push(1)
					} else {
						aRes.push(0)
					}
					return b
				})
        console.log('aTmpAll: ', aTmpAll)
				let bRight = aRes.every(item => item === 1)
				console.log('bRight: ', bRight)
				return bRight
			},

			checkWin(){
				const me = this
				let part = 'aPart' + me.round
				me[part].forEach((item, i) => {
					//console.log('length: ', item.length)
					if (item.length === 13) {
						let aRes = []
						item.reduce((a, b) => {
							if ((a - b) === 1) {
								aRes.push(1)
							} else {
								aRes.push(0)
							}
							return b
						})
						let win = aRes.every(item => item === 1)
						//console.log('win: ', win)
						if (win && (me.round === 1) ) {

							setTimeout(() => {
								$('#item_0_0').css({
                  zIndex: 10
                })
								me.passRound('aPart1')
                me.eventFlag = false
              }, 600)

							setTimeout(() => {
								me.zIndex = [1, 1, 1]
								me.hintTxt = '第二局'
								me.bHint = true
								$('#item_0_0').css({
									zIndex: 0
								})
							}, 1500)

              setTimeout(() => {
								// 过第一关
								me.bHint = false
								me.eventFlag = true
								me.currentRound = me.aPart2
								me.round++
                $.each($('.item'), (i, item) => {
									$(item).css({
										top: me.cardTop * i + me.wTop
									})
                })
              }, 2300)

							setTimeout(() => {
								$('body').css({
									"background-image": "url('assets/img/bg_round2.jpg')"
								})
								me.batchSetOffset()
							}, 2400)

            }else{
							// 过第二关
							me.audio.cross.play()
							me.eventFlag = false
              setTimeout(() => {
								$.each($('.item'), (i, item) => {
									$(item).css({
										top: me.cardTop * i + me.wTop
									})
								})
								$('#item_0_0').css({
									zIndex: 10
								})
								me.passRound('aPart2')
              }, 1000)

							setTimeout(() => {
								me.toggleEnd = true
								$('.end').find('img').addClass('slideInUp animated')
							}, 2000)

            }

					}
				})
			},

			passRound(type){
        let aTmp = this[type][0].slice(0)
        aTmp.sort()

        aTmp.forEach(item => {
        	$('#item_0_' + item).animate($('#item_0_0').offset())
        })

			},

      autoHint(){
				const me = this

				me.countAutoHint = setInterval(() => {
					me.count++
					// console.log('count: ', me.count)
					if(me.count >= 1){
						me.count = 0

            clearInterval(me.countAutoHint)
            me.toggleSeize = true
            me.eventFlag = false

						_guide()

//            setTimeout(() => {
//							_guide()
//            }, 1800)

						setTimeout(() => {
							me.eventFlag = true
							me.toggleSeize = false
						}, 3000)

					}
				}, 1000)

        function _guide() {
					let offset = {
						top: parseInt($('#seize_0').css('top')),
						left: JSON.parse($('#item_0_0').attr('data-offset')).left
					}
					let el = $('#item_1_4')

					el.css({
						opacity: '0.4'
					})

          console.log('el:', el.offset())
          console.log('offset: ', offset)

					el.animate(offset)

					setTimeout(() => {
						let offset = JSON.parse(el.attr('data-offset'))
						// console.log('offset', offset)
						el.css({
							opacity: 0
						})
						el.animate(offset)
					}, 610)

					setTimeout(() => {
						el.css({
							opacity: 1
						})
					}, 1000)
				}
        
      },

			findImpactIndex(el, currentApart1Index){
				const me = this
				let aTmp = [0, 1, 2].filter(item => item != currentApart1Index)

				let aImpact = {}
				aTmp.forEach(item => {
					aImpact[item] = me.impact(el, $('#seize_' + item))
				})

//				console.log('aImpact: ', JSON.stringify(aImpact))
				let res = false
				for (let k in aImpact) {
					if (aImpact[k]) {
						res = k
					}
				}
				return res
			},

			impact(obj, dobj) {
				if (!dobj) return false
				let objOffset = obj.offset()
				let dOffset = dobj.offset()
				let o = {
					x: objOffset.left,
					y: objOffset.top,
					w: obj.width(),
					h: obj.height()
				}

				let d = {
					x: dOffset.left,
					y: dOffset.top,
					w: dobj.width(),
					h: dobj.height()
				}

//				console.log('o: ', JSON.stringify(o))
//				console.log('d: ', JSON.stringify(d))

				let px = o.x <= d.x ? d.x : o.x;
				let py = o.y <= d.y ? d.y : o.y;
//				console.log('px: ', px)
//				console.log('py: ', py)

				// 判断点是否都在两个对象中
				if (px >= o.x &&
          px <= o.x + o.w &&
          py >= o.y &&
          py <= o.y + o.h &&
          px >= d.x &&
          px <= d.x + d.w &&
          py >= d.y &&
          py <= d.y + d.h) {
          console.log('impact')
					return true
				} else {
					console.log('not impact')
					return false
				}
			},

			rmArrEl(arr, el) {
				for (let i = 0; i < arr.length; i++) {
					if (arr[i] == el) {
						arr.splice(i, 1)
					}
				}
				return arr
			},

			findArr(arr){

				let aTmp1 = arr.slice(0)
				let aTmp2 = arr.slice(0)
				let maxIndex = 0
				let minIndex = 0
        
				let max = aTmp1[0]
        let min = aTmp2[0]

				aTmp1.forEach (function(el, i){
					if(el > max) {
						max = el
            maxIndex = i
					}
				})

				aTmp2.forEach (function(el, i){
					if(el < max) {
						min = el
						minIndex = i
					}
				})

        return {
					max,
					maxIndex,
					min,
					minIndex
        }
			},

      getInfo(){
				util.hybirdEvent({
					sClass: 'RewardJs',
					hybirdFn: 'getEndScreenInfo',
					params: {
						pageNo: 1,
						exclude_ids: []
					},
					succ: function (res) {
						if (res.campaignList && res.campaignList.length) {
							if (location.protocol === 'https:') {
								util.http2https(res);
							}
							let campaign = res.campaignList[0];
							campaignMap[campaign['id']] = campaign;
							$('body').attr('campaignId', campaign.id)
						} else {
							// me.noData()
						}
					},
					err: function (err) {
						// me.noData()
					}
				})
      },

			install(){
				const campaignId = $('body').attr('campaignId')
				util.hybirdEvent({
					sClass: 'RewardJs',
					hybirdFn: 'install',
					params: campaignMap[campaignId], // offerId
					succ: function (res) {
						console.log(res)

					},
					err: function () {
						// util.tips('Sorry, network error...');
					}
				})
			},

			toggleCloseBtn(){
				util.hybirdEvent({
					sClass: 'RewardJs',
					hybirdFn: 'toggleCloseBtn',
					params: {
						"state": 1 // 出现
					},
					succ: function (res) {

					},
					err: function () {
						// util.tips('Sorry, network error...');
					}
				})
			},

      eventInit(){
				const me = this
				document.addEventListener('webviewshow', function () {
					// 30秒后关闭按钮出现
					setTimeout(function () {
						me.toggleCloseBtn()
					}, 10000)
				}, false)

				document.addEventListener('orientation', function (res) {
					if (res.param.orientation === 'landscape') {
						if (!util.device().isAndroid) {
							// 只要不是安卓都给横屏提示
//						$('.pauseMask').removeClass('none')
//						$('.pause').removeClass('none')
						}
					} else {
//					$('.pauseMask').addClass('none')
//					$('.pause').addClass('none')
					}
				}, false)
      },

		},
		mounted(){

		},
		filters: {}
	}
  

</script>