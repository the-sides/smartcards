package main
import(
	"net/http"
	"log"
	"github.com/julienschmidt/httprouter"
	"github.com/the-sides/smartslides/statichandlers"
)
func main() {
	router := httprouter.New()

	router.GET("/", statichandlers.Homepage_Handler)
	router.GET("/css/*cssfile", statichandlers.CSS_Handler)
	router.GET("/js/*jsfile", statichandlers.JS_Handler)
	router.GET("/images/*imgfile", statichandlers.Images_Handler)

	log.Fatal(http.ListenAndServe(":8080", router))
}
