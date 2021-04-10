<div class="container">
    <h1>Report bugs:</h1>
    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <fieldset>
        <div class="form-group">
            <label for="name">Name</label>
            <input id="name" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter your name" name="name">
        </div>
        <div class="form-group">
            <label for="mail">Email address</label>
            <input id="mail" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter your email" name="email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="msg">Description of the bug you want to report</label>
            <textarea id="msg" name="message" class="form-control" rows="8"></textarea>
        </div>
        <center><button type="submit" class="btn btn-secondary submit mt-4">Submit</button></center>
        </fieldset>
    </form>
</div>

<style>
    label {
        padding: 1rem 0 1rem 0;
    }
    button{
        padding: 1rem;
    }
</style>