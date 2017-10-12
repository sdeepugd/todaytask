/**
 * http://usejsdoc.org/
 */

$(document)
		.ready(
				function() {

					$("#sortable").sortable();
					$("#sortable").disableSelection();
					highlightNavigation();
					countTodos();
					// all done btn
					$("#checkAll").click(function() {
						AllDone();
					});

					// create todo
					if (window.location.pathname == "/") {
						$('#add-todo').css("display", "inline");
					}

					$('#add-todo').on('keypress', function(e) {
						if (e.which == 13) {
							if ($(this).val() != '') {
								var todo = $(this).val();
								storeTodo(todo);
							} else {
							}
						}
					});

					// mark task as done
					$('.todolist').on(
							'change',
							'#sortable li input[type="checkbox"]',
							function() {
								if ($(this).prop('checked')) {
									var id = $(this).parents("li")
									.attr("id");
									 var doneItem = $(this).parent().parent()
									 .find('label').text();
									 $(this).parent().parent().parent()
									 .addClass('remove');
									 done(doneItem,id);
									 changeTodoStatus(id, 1)
									 countTodos();
								}
							});

					// delete done task from "already done"
					$('.todolist').on('click', '.remove-item', function() {
						var id = $(this).parent().attr("id");
						console.log($(this).parent());
						changeTodoStatus(id, 2)
						removeItem(this);
					});
					
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
					

					(function(e) {
					    var t, o = {
					            className: "autosizejs",
					            append: "",
					            callback: !1,
					            resizeDelay: 10
					        },
					        i = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',
					        n = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"],
					        s = e(i).data("autosize", !0)[0];
					    s.style.lineHeight = "99px", "99px" === e(s).css("lineHeight") && n.push("lineHeight"), s.style.lineHeight = "", e.fn.autosize = function(i) {
					        return this.length ? (i = e.extend({}, o, i || {}), s.parentNode !== document.body && e(document.body).append(s), this.each(function() {
					            function o() {
					                var t, o;
					                "getComputedStyle" in window ? (t = window.getComputedStyle(u, null), o = u.getBoundingClientRect().width, e.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function(e, i) {
					                    o -= parseInt(t[i], 10)
					                }), s.style.width = o + "px") : s.style.width = Math.max(p.width(), 0) + "px"
					            }

					            function a() {
					                var a = {};
					                if (t = u, s.className = i.className, d = parseInt(p.css("maxHeight"), 10), e.each(n, function(e, t) {
					                        a[t] = p.css(t)
					                    }), e(s).css(a), o(), window.chrome) {
					                    var r = u.style.width;
					                    u.style.width = "0px", u.offsetWidth, u.style.width = r
					                }
					            }

					            function r() {
					                var e, n;
					                t !== u ? a() : o(), s.value = u.value + i.append, s.style.overflowY = u.style.overflowY, n = parseInt(u.style.height, 10), s.scrollTop = 0, s.scrollTop = 9e4, e = s.scrollTop, d && e > d ? (u.style.overflowY = "scroll", e = d) : (u.style.overflowY = "hidden", c > e && (e = c)), e += w, n !== e && (u.style.height = e + "px", f && i.callback.call(u, u))
					            }

					            function l() {
					                clearTimeout(h), h = setTimeout(function() {
					                    var e = p.width();
					                    e !== g && (g = e, r())
					                }, parseInt(i.resizeDelay, 10))
					            }
					            var d, c, h, u = this,
					                p = e(u),
					                w = 0,
					                f = e.isFunction(i.callback),
					                z = {
					                    height: u.style.height,
					                    overflow: u.style.overflow,
					                    overflowY: u.style.overflowY,
					                    wordWrap: u.style.wordWrap,
					                    resize: u.style.resize
					                },
					                g = p.width();
					            p.data("autosize") || (p.data("autosize", !0), ("border-box" === p.css("box-sizing") || "border-box" === p.css("-moz-box-sizing") || "border-box" === p.css("-webkit-box-sizing")) && (w = p.outerHeight() - p.height()), c = Math.max(parseInt(p.css("minHeight"), 10) - w || 0, p.height()), p.css({
					                overflow: "hidden",
					                overflowY: "hidden",
					                wordWrap: "break-word",
					                resize: "none" === p.css("resize") || "vertical" === p.css("resize") ? "none" : "horizontal"
					            }), "onpropertychange" in u ? "oninput" in u ? p.on("input.autosize keyup.autosize", r) : p.on("propertychange.autosize", function() {
					                "value" === event.propertyName && r()
					            }) : p.on("input.autosize", r), i.resizeDelay !== !1 && e(window).on("resize.autosize", l), p.on("autosize.resize", r), p.on("autosize.resizeIncludeStyle", function() {
					                t = null, r()
					            }), p.on("autosize.destroy", function() {
					                t = null, clearTimeout(h), e(window).off("resize", l), p.off("autosize").off(".autosize").css(z).removeData("autosize")
					            }), r())
					        })) : this
					    }
					})(window.jQuery || window.$);
					
					
					var __slice = [].slice;
					(function(e, t) {
					    var n;
					    n = function() {
					        function t(t, n) {
					            var r, i, s, o = this;
					            this.options = e.extend({}, this.defaults, n);
					            this.$el = t;
					            s = this.defaults;
					            for (r in s) {
					                i = s[r];
					                if (this.$el.data(r) != null) {
					                    this.options[r] = this.$el.data(r)
					                }
					            }
					            this.createStars();
					            this.syncRating();
					            this.$el.on("mouseover.starrr", "span", function(e) {
					                return o.syncRating(o.$el.find("span").index(e.currentTarget) + 1)
					            });
					            this.$el.on("mouseout.starrr", function() {
					                return o.syncRating()
					            });
					            this.$el.on("click.starrr", "span", function(e) {
					                return o.setRating(o.$el.find("span").index(e.currentTarget) + 1)
					            });
					            this.$el.on("starrr:change", this.options.change)
					        }
					        t.prototype.defaults = {
					            rating: void 0,
					            numStars: 5,
					            change: function(e, t) {}
					        };
					        t.prototype.createStars = function() {
					            var e, t, n;
					            n = [];
					            for (e = 1, t = this.options.numStars; 1 <= t ? e <= t : e >= t; 1 <= t ? e++ : e--) {
					                n.push(this.$el.append("<span class='glyphicon .glyphicon-star-empty'></span>"))
					            }
					            return n
					        };
					        t.prototype.setRating = function(e) {
					            if (this.options.rating === e) {
					                e = void 0
					            }
					            this.options.rating = e;
					            this.syncRating();
					            return this.$el.trigger("starrr:change", e)
					        };
					        t.prototype.syncRating = function(e) {
					            var t, n, r, i;
					            e || (e = this.options.rating);
					            if (e) {
					                for (t = n = 0, i = e - 1; 0 <= i ? n <= i : n >= i; t = 0 <= i ? ++n : --n) {
					                    this.$el.find("span").eq(t).removeClass("glyphicon-star-empty").addClass("glyphicon-star")
					                }
					            }
					            if (e && e < 5) {
					                for (t = r = e; e <= 4 ? r <= 4 : r >= 4; t = e <= 4 ? ++r : --r) {
					                    this.$el.find("span").eq(t).removeClass("glyphicon-star").addClass("glyphicon-star-empty")
					                }
					            }
					            if (!e) {
					                return this.$el.find("span").removeClass("glyphicon-star").addClass("glyphicon-star-empty")
					            }
					        };
					        return t
					    }();
					    return e.fn.extend({
					        starrr: function() {
					            var t, r;
					            r = arguments[0], t = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
					            return this.each(function() {
					                var i;
					                i = e(this).data("star-rating");
					                if (!i) {
					                    e(this).data("star-rating", i = new n(e(this), r))
					                }
					                if (typeof r === "string") {
					                    return i[r].apply(i, t)
					                }
					            })
					        }
					    })
					})(window.jQuery, window);
					$(function() {
					    return $(".starrr").starrr()
					})

					$(function(){

					  $('#new-review').autosize({append: "\n"});

					  var reviewBox = $('#post-review-box');
					  var newReview = $('#new-review');
					  var openReviewBtn = $('#open-review-box');
					  var closeReviewBtn = $('#close-review-box');
					  var ratingsField = $('#ratings-hidden');

					  openReviewBtn.click(function(e)
					  {
					    reviewBox.show(400, function()
					      {
					        $('#new-review').trigger('autosize.resize');
					        newReview.focus();
					      });
					    openReviewBtn.fadeOut(100);
					    closeReviewBtn.show();
					  });

					  closeReviewBtn.click(function(e)
					  {
					    e.preventDefault();
					    reviewBox.slideUp(300, function()
					      {
					        newReview.focus();
					        openReviewBtn.fadeIn(200);
					      });
					    closeReviewBtn.hide();
					    
					  });

					  $('.starrr').on('starrr:change', function(e, value){
					    ratingsField.val(value);
					    var id = $(this).parent().parent().attr("id");
					    changePriorty(value,id);
					  });
					});
				});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
					
var userid = getCookie("auth");
	
function addTodoForm(todo) {
	storeTodo(todo);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function highlightNavigation() {
	switch (window.location.pathname) {
	case "/":
		$('#today').addClass('active')
		break
	case "/yesterday":
		$('#yesterday').addClass('active')
		break
	case "/lastweek":
		$('#lastweek').addClass('active')
		break
	}
}
// count tasks
function countTodos() {
	var count = $("#sortable li").length;
	$('.count-todos').html(count);
}

// create task
function createTodo(text, id) {
	var markup = '<li class="ui-state-default list-group-item-action list-group-item" id='
			+ id
			+ ' ><div class="checkbox"><label><input type="checkbox" value="" /><div class="todoitem">'
			+ text + '</div></label><div class="stars starrr" data-rating="0"></div></div></li>';
	$('#sortable').append(markup);
	$('#add-todo').val('');
	$(".starrr").starrr()
}

// mark task as done
function done(doneItem,id) {
	var done = doneItem;
	var markup = '<li id='+id+'>'
			+ done
			+ '<button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>';
	$('#done-items').append(markup);
	$('.remove').remove();
}

// mark all tasks as done
function AllDone() {
	var myArray = [];

	$('#sortable li').each(function() {
		myArray.push($(this).text());
	});

	// add to done
	for (i = 0; i < myArray.length; i++) {
		$('#done-items')
				.append(
						'<li>'
								+ myArray[i]
								+ '<button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>');
	}

	// myArray
	$('#sortable li').remove();
	countTodos();
}

// remove done task from list
function removeItem(element) {
	$(element).parent().remove();
}

function storeTodo(todo) {
	console.log("inside")
	$.post("/home/addtodo", {
		todo : todo
	}, function(data, status) {
		id = data["id"];
		createTodo(todo, id);
		countTodos();
	});
}

function changePriorty(id,starcount) {
	$.post("/home/changepriority", {
		id : id,
		starcount : starcount
	}, function(data, status) {
		console.log(data);
	});
}

function changeTodoStatus(id, status) {
	console.log("id post" + id);
	$.post("/home/changetodostatus", {
		status : status,
		id : id
	}, function(data, status) {
		console.log(data);
	});
}