# Ping

Types:

- <code><a href="./src/resources/ping.ts">PingRetrieveResponse</a></code>

Methods:

- <code title="get /ping">client.ping.<a href="./src/resources/ping.ts">retrieve</a>() -> PingRetrieveResponse</code>

# Generations

Types:

- <code><a href="./src/resources/generations/generations.ts">Generation</a></code>
- <code><a href="./src/resources/generations/generations.ts">GenerationListResponse</a></code>

Methods:

- <code title="post /generations">client.generations.<a href="./src/resources/generations/generations.ts">create</a>({ ...params }) -> Generation</code>
- <code title="get /generations/{id}">client.generations.<a href="./src/resources/generations/generations.ts">retrieve</a>(id) -> Generation</code>
- <code title="get /generations">client.generations.<a href="./src/resources/generations/generations.ts">list</a>({ ...params }) -> GenerationListResponse</code>
- <code title="delete /generations/{id}">client.generations.<a href="./src/resources/generations/generations.ts">delete</a>(id) -> void</code>

## CameraMotion

Types:

- <code><a href="./src/resources/generations/camera-motion.ts">CameraMotion</a></code>
- <code><a href="./src/resources/generations/camera-motion.ts">CameraMotionListResponse</a></code>

Methods:

- <code title="get /generations/camera_motion/list">client.generations.cameraMotion.<a href="./src/resources/generations/camera-motion.ts">list</a>() -> CameraMotionListResponse</code>