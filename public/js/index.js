$(document).ready(() => {
    $('#create_blog_form').submit(() => {
        event.preventDefault()
        const title = document.querySelector('#title').value
        const headline = document.querySelector('#headline').value
        const author = document.querySelector('#author').value
        const body = document.querySelector('#body').value

        const sent_data = {
            title,
            headline,
            author,
            body
        }
        console.log()

        $.ajax({
            url: '/blogs/create',
            data: sent_data,
            dataType: 'JSON',
            type: "POST",
            success: (data) => {
                console.log(data)
                if (data.result.status == "Success") {
                    location.href = '/blogs/all'
                } else {
                    console.log(data.result.error)
                    alert(data.result.error)
                }
            },
            error: (err) => {
                console.log(err)
            }
        })
    })


    deletePost = (id) => {

        if (confirm("Are You Sure You Want TO Delete This Post")) {
            console.log(id)

            $.ajax({
                url: '/blogs/delete',
                data: {
                    id
                },
                dataType: 'JSON',
                type: "POST",
                success: (data) => {
                    console.log(data)
                    if (data.status == "Success") {
                        alert("POST DELETED")
                        location.reload()
                    } else {
                        alert("An Error Occured")
                    }
                },
                error: (err) => {
                    console.log(err)
                }
            })
        } else {

        }
    }

})