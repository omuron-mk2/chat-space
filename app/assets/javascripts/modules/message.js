$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
      `<div class="message-space" data-message-id=${message.id}>
        <div class="message-info">
          <div class="message-info__data">
            ${message.user_name}
          </div>
          <div class="message-info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <div class="message__content">
            ${message.content}
          </div>
          <imag class="Message__image" src="${message.image}">
        </div>
      </div>`
    return html;
    } else {
      let html =
      `<div class="message-space" data-message-id=${message.id}>
        <div class="message-info">
          <div class="message-info__data">
            ${message.user_name}
          </div>
          <div class="message-info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <div class="message__content">
            ${message.content}
          </div>
        </div>
      </div>`
      return html;
    };
  }

  $(".form").on("submit", function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Chat-main__message').append(html);      
      $('form')[0].reset();
      $('.Chat-main__message').animate({ scrollTop: $('.Chat-main__message')[0].scrollHeight});
      $(".submit").prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.submit').prop("disabled", false);
    });
  });

  // let reloadMessages = function(){
  //   let last_message_id = $(".message-space:last").data("message-id"); 
  //   $ajax({
  //     url: "api/messages",
  //     type: 'GET',
  //     dataType: 'json',
  //     data: {id: last_message_id}
  //   })
  //   .done(function(messages){
  //     if (messages.length !== 0) {
  //       let insertHTML = '';
  //       $.each(messages, function(i, message) {
  //         insertHTML += buildHTML(message)
  //       });
  //       $('.Chat-main__message').append(insertHTML);
  //       $('.Chat-main__message').animate({ scrollTop: $('.Chat-main__message')[0].scrollHeight});
  //     }
  //   })
  //   .fail(function(){
  //     alert('error');
  //   });
  // };
  // setInterval(reloadMessages, 7000);
});