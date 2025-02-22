# Generations

Types:

- <code><a href="./src/resources/generations/generations.ts">Generation</a></code>
- <code><a href="./src/resources/generations/generations.ts">GenerationListResponse</a></code>

Methods:

- <code title="post /generations">client.generations.<a href="./src/resources/generations/generations.ts">create</a>({ ...params }) -> Generation</code>
- <code title="get /generations">client.generations.<a href="./src/resources/generations/generations.ts">list</a>({ ...params }) -> GenerationListResponse</code>
- <code title="delete /generations/{id}">client.generations.<a href="./src/resources/generations/generations.ts">delete</a>(id) -> void</code>
- <code title="get /generations/{id}">client.generations.<a href="./src/resources/generations/generations.ts">get</a>(id) -> Generation</code>
- <code title="post /generations/{id}/upscale">client.generations.<a href="./src/resources/generations/generations.ts">upscale</a>(id, { ...params }) -> Generation</code>

## CameraMotion

Types:

- <code><a href="./src/resources/generations/camera-motion.ts">CameraMotionListResponse</a></code>

Methods:

- <code title="get /generations/camera_motion/list">client.generations.cameraMotion.<a href="./src/resources/generations/camera-motion.ts">list</a>() -> CameraMotionListResponse</code>

## Image

Methods:

- <code title="post /generations/image">client.generations.image.<a href="./src/resources/generations/image.ts">create</a>({ ...params }) -> Generation</code>

## Video

Methods:

- <code title="post /generations">client.generations.video.<a href="./src/resources/generations/video.ts">create</a>({ ...params }) -> Generation</code>

# Ping

Types:

- <code><a href="./src/resources/ping.ts">PingCheckResponse</a></code>

Methods:

- <code title="get /ping">client.ping.<a href="./src/resources/ping.ts">check</a>() -> PingCheckResponse</code>

# Credits

Types:

- <code><a href="./src/resources/credits.ts">CreditGetResponse</a></code>

Methods:

- <code title="get /credits">client.credits.<a href="./src/resources/credits.ts">get</a>() -> CreditGetResponse</code>
