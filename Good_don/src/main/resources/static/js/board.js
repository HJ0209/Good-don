var board = {
		init: function() {
			var _this = this;
			$('#btnWrite').on('click', function() {
				_this.write();
			});
		},
		write: function() {
			console.log("여기호출");
			var url = '/api/board'
				var data = {
					title: $('#title').val(),
					creatorId: $('#creatorId').val(),
					contents: $('#contents').val()
			};
			fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(data => {
			console.log(JSON.stringify(data));
			alert('글이 등록되었습니다.');
			window.location.href = '/boardList.do';
		})
		.catch(error => {
			console.error(error);
			alert('게시글 저장 중 오류가 발생했습니다.');
			window.location.href = '/boardList.do';
		});
	}
};

board.init();