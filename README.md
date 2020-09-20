Frontend
```js
const handleDeleteProperty = async (id) => {
    try{
        const res = await Axios.delete('url', id);
        if(res.data.success){
            alert(res.data.msg);
        }
    }
    catch(err){
        console.error(err);
    }
}
```
```js
<td><a onClick={e => handleDeleteProperty(property.id)}>{DeleteBtn}</a></td>

```

Backend
```js
router.delete('url', auth, async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.body.id);
        return res.status(200).json({ success: true, msg: 'Product Deleted' });
    }
    catch(err){
        console.error(err);
    }
});
```