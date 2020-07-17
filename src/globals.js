const variables = {
    spotify_client: "f940d61988a6484fbdcc98a596d479ec",
    spotify_redirect: "http://" + window.location.hostname + 
        ((window.location.hostname).includes('localhost') ? 
        (":" + window.location.port) : "") + "/linked-account",
    spotify_base64_codes: "Zjk0MGQ2MTk4OGE2NDg0ZmJkY2M5OGE1OTZkNDc5ZWM6OGZiMzA1ZjA3NzIzNGZhMjhmNjI5YThlYjFmMTI4MmQ=",
    api_gateway_url: "https://8m717iy4bh.execute-api.us-east-1.amazonaws.com/Prod",
    load_balancer_url: "http://shiftemotionspotifyblancer-378386110.us-west-2.elb.amazonaws.com/"
}

export default variables;