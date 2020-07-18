const variables = {
    spotify_client: "f940d61988a6484fbdcc98a596d479ec",
    spotify_redirect: "http://" + window.location.hostname + 
        ((window.location.hostname).includes('localhost') ? 
        (":" + window.location.port) : "") + "/linked-account",
    spotify_base64_codes: "Zjk0MGQ2MTk4OGE2NDg0ZmJkY2M5OGE1OTZkNDc5ZWM6OGZiMzA1ZjA3NzIzNGZhMjhmNjI5YThlYjFmMTI4MmQ=",
    api_gateway_url: "https://24sr15dpyc.execute-api.us-west-2.amazonaws.com/Prod",
    load_balancer_url: "http://shiftEmotionSpotifyBlancer-869938297.us-west-2.elb.amazonaws.com",
    s3_files_url: "https://terraform-20200718173636323900000009.s3-us-west-2.amazonaws.com/"
}

export default variables;